'use strict';

var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var vueify = require('vueify');
var babelify = require('babelify');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*', ['js']);
});

gulp.task('js', function () {
    return browserify('src/js/main.js')
        .transform(babelify, {presets: ['es2015']})
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("build/js/main.js"))
});