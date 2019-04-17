const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const path = require('path');

gulp.task('concat-minify', () => {
    return gulp.src(['./src/model/*.js', './src/controller/*.js', './src/view/*.js'])
    .pipe(concat('concat.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('copy-files', () => {
     return gulp.src(['./dist/*'])
    .pipe(gulp.dest(path.join(__dirname, '../node-js/static/js')));
});

gulp.task('default', gulp.series(['concat-minify', 'copy-files']));
