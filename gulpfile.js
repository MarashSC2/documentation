var gulp = require('gulp'),
	concat = require('gulp-concat');
	
var paths = {
	indexSrc: ['./src/index.top.html','./src/index.bottom.html']	
};

gulp.task('index', function() {
  return gulp.src(paths.indexSrc)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['index']);