var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var typographic = require('typographic');
var nib         = require('nib');
//var browserSync = require('browser-sync');
//var reload      = browserSync.reload;

gulp.task('styles', function(){
	gulp.src('style.styl')
		.pipe(stylus({
			use:[typographic(), nib()]
		}))
		.pipe(gulp.dest('./'))
		//.pipe(reload({stream:true}));

});

/*gulp.task('html', function(){
  gulp.src('index.html')
  .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});*/

gulp.task('watch:styles', function(){
	gulp.watch('**/*.styl', ['styles']);
	//gulp.watch('index.html', ['html']);

});
gulp.task('default', ['watch:styles']);//, 'browserSync'
