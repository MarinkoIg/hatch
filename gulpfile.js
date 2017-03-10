var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');


gulp.task('sass', function() {
    return gulp
        .src('sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);


// npm install --save-dev gulp
// npm install --save-dev gulp-sass
// npm install --save-dev gulp-sass-glob