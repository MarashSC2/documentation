var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	batch = require('gulp-batch'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename");;
	
var paths = {
	indexSrc: [	
		'./src/index.top.html',
		'./src/components/menu.html',
		'./src/components/test.html',
		'./src/index.bottom.html'
	],
	watch: './src/**/*',
	dst: './build',
	sassSrc: './src/style.scss',
	scriptSrc: './src/script.js'
};

gulp.task('script', function(){
	return gulp.src(paths.scriptSrc)
	.pipe(watch(paths.scriptSrc))
    .pipe(gulp.dest(paths.dst));
})

gulp.task('index', function() {
  return gulp.src(paths.indexSrc)
    .pipe(concat('index.html'))
    .pipe(gulp.dest(paths.dst));
});

gulp.task('style',function(){
	return gulp.src(paths.sassSrc)
	.pipe(watch(paths.sassSrc))
	.pipe(rename('style.cs'))
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dst));
});

gulp.task('watch', function () {
    watch(paths.watch, batch(function (events, done) {
        gulp.start('index', done);
    }));
});

gulp.task('default', ['index','style','script','watch']);