const gulp = require('gulp');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');

gulp.task('optimize-js', () => {
  return gulp.src('build/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build'));
});

gulp.task('optimize-css', () => {
  return gulp.src('build/**/*.css')
    .pipe(postcss([require('autoprefixer')]))
    .pipe(gulp.dest('build'));
});

gulp.task('post-build', gulp.parallel('optimize-js', 'optimize-css'));
