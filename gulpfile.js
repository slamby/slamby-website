'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify');

// Default
gulp.task('default', ['watch']);

gulp.task('sass', function () {
  return gulp.src('app/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .on('error', swallowError)
    .pipe(minifycss())
    .pipe(gulp.dest('app/.'))
});

gulp.task('jsminify', function () {
  return gulp.src([
    'build/angular2.js',
    'build/app.js'
    ])
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      compress:true,
      noSource:true
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('build/angular2.js', ['jsminify']);
});

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}