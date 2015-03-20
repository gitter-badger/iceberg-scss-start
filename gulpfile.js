var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    svgo = require('imagemin-svgo');

    gulp.task('scss', function () {
        gulp.src('./src/scss/main.scss')
        .pipe(sass({ includePaths: ['./scss'], errLogToConsole: true }))
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest('./public/css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'))
    });
    gulp.task('css', function () {
        gulp.src(['./src/css/*'])
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css/lib'))
    });
    gulp.task('js', function () {
        gulp.src('./src/js/*')
        .pipe(gulp.dest('./public/js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/js'))
    });
    gulp.task('svg', function(){
        gulp.src(['./src/images/*.svg'])
        .pipe(svgo()())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/images/'))
    });

gulp.task('watch',function(){
  gulp.watch('./src/scss/*',['scss']),
  gulp.watch(['./src/css/*'],['css']),
  gulp.watch(['./src/js/*'],['js']),
  gulp.watch(['./src/images/*.svg'],['svg']);
});

gulp.task('default',['watch', 'scss', 'js', 'svg', 'css']);