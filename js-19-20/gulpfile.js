'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['scripts','compress','sass','concat','minify-css','watch']);

gulp.task('concat',['sass'], function () {
  return gulp.src('./app/css/*.css')
    .pipe(concatCss("./app/style.css"))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('minify-css',['concat'], function() {
  return gulp.src('./app/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('compress',['scripts'], function() {
  gulp.src('build/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('build/js'))
});

gulp.task('watch', function () {
  gulp.watch('./app/scss/*.scss', ['scripts','compress','sass','concat','minify-css']);

});