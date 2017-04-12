var gulp 		= require('gulp');
var sass        = require('gulp-sass');
var minifyCSS 	= require('gulp-minify-css');
var webserver 	= require('gulp-webserver');
var watch       = require('gulp-watch');
var uglify      = require('gulp-uglify');
var pump        = require('pump');

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
    gulp.watch(['js/**/*.js'], ['compress']);
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('js/application.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('default', ['watch', 'webserver', 'compress'], function() {
    console.log('Up and running, enjoy!')
});