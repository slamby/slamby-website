'use strict';
 
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('index-compile', function () {
    gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'));
});

var sourceFiles = [
    "node_modules/zone.js/dist/zone.js",
    "node_modules/reflect-metadata/Reflect.js",
    "src/assets/favicon.png",
    "src/assets/fonts/slamby-logo.woff"
];

gulp.task('copy-vendors', function () {
    gulp.src(sourceFiles)
        .pipe(gulp.dest('build'));
        
    gulp.src('src/assets/site.scss')
        .pipe(sass({includePaths: ['src/assets'], outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

gulp.task('create-tmp', function(){
    gulp.src("src/**/*")
        .pipe(gulp.dest("tmp"));
});

gulp.task('pug', function () {
    gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('tmp/'));
});

gulp.task('pug:watch', function () {
    gulp.watch('./src/**/*.pug', ['pug']);
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({includePaths: ['src/assets'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('tmp/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('build',['index-compile','copy-vendors']);