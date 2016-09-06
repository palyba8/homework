'use strict';
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
const babel = require('gulp-babel');

gulp.task('default', ['babel','concat','minify-css','watch']);

gulp.task('concat', function () {
  return gulp.src('./app/css/*.css')
    .pipe(concatCss("./app/style.css"))
    .pipe(gulp.dest('./'));
});

gulp.task('babel', function() {
    gulp.src('app/js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/js'))
});

gulp.task('minify-css',['concat'], function() {
  return gulp.src('./app/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('scripts',['babel'], function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('compress',['babel'], function() {
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
  gulp.watch('./app/scss/*.scss', ['babel','concat','minify-css']);

});