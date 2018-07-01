var gulp = require('gulp'),
	connect = require('gulp-connect'),
	idb = require('idb');

gulp.task('connect', function() {
  connect.server({
    port: 8887
  });
});

gulp.task('default', ['connect']);