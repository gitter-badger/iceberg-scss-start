var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	jsmin = require('gulp-jsmin'),
	concat = require('gulp-concat'),
	svgo = require('imagemin-svgo'),
    header = require('gulp-header'),
    pkg = require('./package.json'),
    banner = ['/*', ' <%= pkg.name %> - v<%= pkg.version %>', 
              ' @description <%= pkg.description %>', 
              ' --------------------', 
              ' @author <%= pkg.author %>', 
              ' @link <%= pkg.link %>', 
              ' */',' '].join('\n');

gulp.task('scss', function () {
    gulp.src('./src/scss/main.scss')
    .pipe(sass({ includePaths: ['./scss'], errLogToConsole: true }))
 	  .pipe(autoprefixer('last 10 version'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./public/css'))
    .pipe(minifyCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css'))
});
gulp.task('css', function () {
    gulp.src(['./src/css/*'])
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./public/css/lib'))
});
gulp.task('js', function () {
    gulp.src('./src/js/script.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./public/js'))
});
gulp.task('img', function(){
    gulp.src(['./src/images/*.*'])
    .pipe(svgo()())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/images/'))
});
gulp.task('watch',function(){
  gulp.watch('./src/scss/*.scss',['scss']),
  gulp.watch(['./src/css/*.css','./src/css/lib/*.css'],['css']),
  gulp.watch(['./src/js/*.js','./src/js/lib/*.js'],['js']),
  gulp.watch(['./src/images/*.svg'],['img']);
});
gulp.task('default',['watch', 'scss', 'js', 'img', 'css']);