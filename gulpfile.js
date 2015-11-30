var gulp = require('gulp'),
    path = require('path'),
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    less: 'contents/less/',
    js: 'contents/js/',
    css: 'contents/css/',
    lifemap: {
      less: 'contents/lifemap/less/'
    }
};

gulp.task('lint', function () {
    return gulp.src([ path.js + 'cs/**/*.js'])
        .pipe(eslint({
            rules: {
                quotes: [1, 'single']
            },
            globals: {
                window: false,
                document: false,
                jQuery: false,
                d3: false,
                _: false,
                cs: false,
            },
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('less', function () {
    return gulp.src(paths.less + 'styles.less')
        .pipe(less({
            paths: [ paths.less ]
        }))
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest(paths.css));
});

gulp.task('lifemap-less', function () {
    return gulp.src(paths.lifemap.less + 'styles.less')
        .pipe(less({
            paths: [ paths.lifemap.less ]
        }))
        .pipe(autoprefixer('last 10 version'))
        .pipe(rename('lifemap.css'))
        .pipe(gulp.dest(paths.css));
});

gulp.task('semantic-js', function(){
    return gulp.src([paths.less + 'semantic/definitions/**/*.js'])
        .pipe(concat('semantic.js'))
        .pipe(gulp.dest(paths.js));
});

gulp.task('default', function() {
    gulp.watch([
        paths.less + '/**/*.less',
        paths.less + '/**/*.variables',
        paths.less + '/**/*.overrides'
    ], ['less']);

    gulp.watch([
        paths.lifemap.less + '/**/*.less',
        paths.lifemap.less + '/**/*.variables',
        paths.lifemap.less + '/**/*.overrides'
    ], ['lifemap-less']);
});
