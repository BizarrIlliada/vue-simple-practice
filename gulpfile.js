const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return gulp.src('styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'));
}

function watch() {
  gulp.watch('styles/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;
exports.default = watch;
