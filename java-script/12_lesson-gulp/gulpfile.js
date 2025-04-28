const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // <-- ВАЖЛИВО!

function style() {
    return gulp.src('./src/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));


}
function watch() {
    gulp.watch('./src/style/main.scss', style);
}
exports.default = watch;
