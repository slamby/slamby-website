'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Default
gulp.task('default', ['sass:watch']);

gulp.task('sass', function () {
  return gulp.src('app/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
	.pipe(gulp.dest('app/.'))
});

gulp.task('sass:watch', function () {
  gulp.watch('app/**/*.scss', ['sass']);
});
