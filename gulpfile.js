const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const log = require('fancy-log');

const CSS_DESTINATION = './static/css'
const SASS_PATTERN = './private/sass/**/*.{scss,sass}';


/**
 * Usage:
 * - "gulp sass"
 */
function compileSass(done) {
    return gulp.src(SASS_PATTERN)
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (error) {
            log.error(
                'Error (' + error.plugin + '): ' + error.messageFormatted
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
    done();
}

function watchSass() {
    return gulp.watch(SASS_PATTERN, gulp.series('sass'));
}

exports.watch = watchSass;
exports.sass = compileSass;
exports.build = compileSass;
exports.default = gulp.series(compileSass, watchSass)
