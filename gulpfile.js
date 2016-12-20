'use strict';
 
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var pngquant = require('pngquant');
var imageminOptipng = require('imagemin-optipng');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var packageJson = require('./package.json');
var insert = require('gulp-insert');
var pugInheritance = require('gulp-pug-inheritance');
var pugModules = require('gulp-jade-modules');

// todo: assets folder image optimise during production build.

var getPublicPath = function(){
    var cdnPath = 'https://cdn.rawgit.com/slamby/slamby-website/';
    var version = packageJson.version;
    return process.env.NODE_ENV == 'production' ? cdnPath + version : '';
}

gulp.task('default',
  [process.env.NODE_ENV === 'production' ? 'production' : 'development']
);

gulp.task('demo', function(){
    console.log(getPublicPath());
});

// Copy vendor files.
gulp.task('prepare-build', function () {

    // Copy and compile index.html.
    gulp.src('src/index.pug')
        .pipe(pug({
            basedir: __dirname + '/src/',
            data: {
                publicPath: getPublicPath()
            }
        }))
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
        .pipe(insert.prepend('$publicPath: "'+getPublicPath()+'";'))
        .pipe(sass({
            includePaths: ['src/assets'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
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
        .pipe(pug({
            basedir: __dirname + '/src/',
            data: {
                publicPath: getPublicPath()
            }
        }))
        .pipe(gulp.dest('tmp/'));
});

// Html copy
gulp.task('html-copy', function () {
    gulp.src('src/**/*.html')
        .pipe()
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
    .pipe(insert.prepend('$publicPath: "'+getPublicPath()+'";'))
    .pipe(sass({
        includePaths: ['src/assets'],
        outputStyle: 'compressed'
    }).on('error', sass.logError))
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

gulp.task('imagemin', () =>
    gulp.src('assets/images/**/*')
        .pipe(imagemin(
            {
                optimizationLevel: 5,
                progressive: true,
                use: [
                    imageminOptipng(),
                    imageminJpegRecompress()
                ]
            }
        ))
        .pipe(gulp.dest('assets/images'))
);

// Watcher for development
gulp.task('developer:watch', function () {
    gulp.watch('./src/**/*.pug', ['pug-compile']);
    gulp.watch('./src/**/*.scss', ['sass-compile']);
    gulp.watch('./src/**/*.ts', ['ts-copy']);
    gulp.watch('./src/**/*.html', ['html-copy']);
});