'use strict';
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['gulp-jasmine','watch']);
 
gulp.task('test', function () {
  gulp.src('./spec/spec.js')
    .pipe(jasmine());
});

gulp.task('watch', function () {
  gulp.watch('./js/script.js', ['gulp-jasmine']);

});