const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const CSS_DESTINATION = './static/css'
const SASS_PATTERN = './private/sass/**/*.{scss,sass}';


/**
 * Usage:
 * - "gulp sass"
 */
gulp.task('sass', function () {
    return gulp.src(SASS_PATTERN)
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (error) {
            gutil.log(gutil.colors.red(
                'Error (' + error.plugin + '): ' + error.messageFormatted)
            );
        })
        .pipe(cleanCSS())
        .pipe(
            postcss([
                autoprefixer({
                    // browsers are coming from browserslist file
                    cascade: false,
                }),
            ])
        )
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(CSS_DESTINATION));
});


gulp.task('default', ['build']);
gulp.task('watch', function () {
    gulp.watch(SASS_PATTERN, ['sass']);
});
// this command will run on the cloud
gulp.task('build', ['sass']);
