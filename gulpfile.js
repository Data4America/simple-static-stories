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

// Paths
var paths = {
  less:   'contents/less/',
  js:     'contents/js/',
  css:   'contents/css/'
};

gulp.task('lint', function () {
    return gulp.src([ path.js + 'cs/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint({
          rules: {
            quotes: [1, 'single']
          },
          globals: {
            'window': false,
            'document': false,
            'jQuery': false,
            'd3': false,
            '_': false,
            'cs': false,
          },
        }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // jo have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

gulp.task('less', function () {
  return gulp.src(paths.less + 'styles.less')
    .pipe(less({
      paths: [ paths.less ]
    }))
    .pipe(autoprefixer('last 10 version'))
    .pipe(minifyCSS({
      processImport: false
    }))
    .pipe(gulp.dest(paths.css));
});

gulp.task('semantic-js', function(){
  return gulp.src([paths.less + 'semantic/definitions/**/*.js'])
    .pipe(concat('semantic.js'))
    .pipe(gulp.dest(paths.js))
    .pipe(rename('semantic.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));
});

gulp.task('default', function() {

  // Watch LESS files
  gulp.watch([
    paths.less + '/**/*.less',
    paths.less + '/**/*.variables',
    paths.less + '/**/*.overrides'], ['less']);
});
