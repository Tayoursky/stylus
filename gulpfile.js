var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styl', function () {
  return gulp.src('stylus/screen.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  return gulp.watch('stylus/*.styl', ['styl']);
});