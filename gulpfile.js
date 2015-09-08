var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	batch = require('gulp-batch');
	
var paths = {
	indexSrc: [	
		'./src/index.top.html',
		'./src/components/menu.html',
		'./src/index.bottom.html'
	],
	watch: './src/**/*'
};

gulp.task('index', function() {
  return gulp.src(paths.indexSrc)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    watch(paths.watch, batch(function (events, done) {
        gulp.start('index', done);
    }));
});

gulp.task('default', ['index','watch']);