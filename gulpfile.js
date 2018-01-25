const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const babel = require('gulp-babel');
const zip = require('gulp-zip');
const bump = require('gulp-bump');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var webpack4 = require('webpack')

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('js', function() {
    return gulp.src('./src/script/**/*.js')
    .pipe(webpack(require( './webpack/webpack.build.js'),webpack4))
    .pipe(gulp.dest('app/'))
});

gulp.task('js:watch', function() {
    return gulp.src('./src/script/**/*.js')
    .pipe(webpack(require( './webpack/webpack.watch.js'),webpack4))
    .pipe(gulp.dest('app/'))
});

gulp.task('bump:package', function(e){
    gulp.src('./package.json')
    .pipe(bump({type:'minor'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:manifest', function(e){
    gulp.src('./app/manifest.json')
    .pipe(bump({type:'minor'}))
    .pipe(gulp.dest('./app'));
});

gulp.task('zip', () =>
    gulp.src('./app')
    .pipe(zip('safeDeployer.zip'))
    .pipe(gulp.dest('./'))
);

// Final Tasks

gulp.task('build:prod', [ 'js', 'sass', 'bump:package', 'bump:manifest', 'zip']);
gulp.task('build', [ 'js', 'sass' ]);