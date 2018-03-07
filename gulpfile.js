/* jshint esversion: 6 */

// jshint ignore: start

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('default',function(){
    return gutil.log('Gulp in esecuzione');
});

gulp.task('copiaFile', function(){
    gulp.src('source/html/*.html').pipe(gulp.dest('dist'));
    gulp.src('source/javascript/*.js').pipe(gulp.dest('dist'));
    gulp.src('source/css/*.css').pipe(gulp.dest('dist'));
});

// to configure jshint task

gulp.task('jshint', function() {
    return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function(){
    return gulp.src('./source/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./source/css'));
        
});

gulp.task('sassWatch',function(){
    gulp.watch('./source/sass/*.scss', ['sass']);
});
