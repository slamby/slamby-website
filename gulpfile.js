var gulp = require('gulp'),
	tsc = require('gulp-tsc'),
	shell = require('gulp-shell');

var paths = {
	ts: {
	    src: [
		'./server.ts'
	    ],
	    dest : './'
	}
}

// Default
gulp.task('default', ['watch']);

// Build
gulp.task('build', function () {
	return gulp
	    .src(paths.ts.src)
	    .pipe(tsc({
		module: "CommonJS",
		sourcemap: true,
		emitError: false
	    }))
	    .pipe(gulp.dest(paths.ts.dest));
});

gulp.task('watch', function() {
  gulp.watch('./server.ts', ['build']);
});
