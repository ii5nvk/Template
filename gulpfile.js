var gulp = require('gulp'),
  connect = require('gulp-connect'),
  opn = require('opn');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port  : 8888
  });
  opn('http://localhost:8888');
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);