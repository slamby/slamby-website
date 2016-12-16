'use strict';
 
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

// todo: assets folder image optimise during production build.

// Copy vendor files.
gulp.task('prepare-build', function () {

    // Copy and compile index.html.
    gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'));

    // Copy static files.
    var sourceFiles = [
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/es6-shim/es6-shim.js",
        "src/assets/favicon.png",
        "src/assets/fonts/slamby-logo.woff"
    ];

    gulp.src(sourceFiles)
        .pipe(gulp.dest('build'));

    // Copy and compile site.css.
    gulp.src('src/assets/site.scss')
        .pipe(sass({includePaths: ['src/assets'], outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

// Prepare tmp folder + content
gulp.task('prepare-tmp', function(){
    gulp.src("src/**/*")
        .pipe(gulp.dest("tmp"));
});

// Pug compile
gulp.task('pug-compile', function () {
    gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('tmp/'));
});

// Html copy
gulp.task('html-copy', function () {
    gulp.src('src/**/*.html')
        .pipe(pug())
        .pipe(gulp.dest('tmp/'));
});

// Typescript copy
gulp.task('ts-copy', function () {
    gulp.src('src/**/*.ts')
        .pipe(gulp.dest('tmp/'));
});

// Sass compile
gulp.task('sass-compile', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({includePaths: ['src/assets'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('tmp/'));
});

// Clean tmp folder.
gulp.task('clean-tmp', function () {
    return gulp.src('tmp', {read: false})
        .pipe(clean());
});

// Clean build folder.
gulp.task('clean-build', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

// Watcher for development
gulp.task('developer:watch', function () {
    gulp.watch('./src/**/*.pug', ['pug-compile']);
    gulp.watch('./src/**/*.scss', ['sass-compile']);
    gulp.watch('./src/**/*.ts', ['ts-copy']);
    gulp.watch('./src/**/*.html', ['html-copy']);
});