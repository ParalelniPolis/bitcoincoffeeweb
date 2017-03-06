var gulp 		= require('gulp');
var sass        = require('gulp-sass');
var minifyCSS 	= require('gulp-minify-css');
var webserver 	= require('gulp-webserver');
var watch       = require('gulp-watch');

gulp.task('sass', function() {
    gulp.src('./src/*.scss')
        .pipe(sass({
            css: 'style',
            sass: 'src'
        }))
        .on('error', function(error) { console.log(error) })
        .pipe(minifyCSS())
        .pipe(gulp.dest('style'));
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch', 'webserver'], function() {
    console.log('Up and running, enjoy!')
});
