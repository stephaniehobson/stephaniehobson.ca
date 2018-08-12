const gulp = require('gulp');
const sass = require('gulp-sass');
const hash = require('gulp-hash');
const del = require('del');
const gulpStylelint = require('gulp-stylelint');

// compile SCSS files to CSS
gulp.task('scss', () => {
    del(['static/css/**/*']);
    gulp.src('src/scss/main.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(hash())
        .pipe(gulp.dest('static/css'))
        //Create a hash map
        .pipe(hash.manifest('hash.json'))
        //Put the map in the data directory
        .pipe(gulp.dest('data/css'));
});

// lint SCSS files
gulp.task('scss:lint', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});

// hash javascript
gulp.task('js', () => {
    del(['static/js/**/*']);
    gulp.src('src/js/**/*')
        .pipe(hash())
        .pipe(gulp.dest('static/js'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/js'));
});

// copy icons to public folder
gulp.task('icons', () => {
    del(['static/images/icons/*']);
    gulp.src([
        'node_modules/simple-icons/icons/flickr.svg',
        'node_modules/simple-icons/icons/github.svg',
        'node_modules/simple-icons/icons/pinboard.svg',
        'node_modules/simple-icons/icons/twitter.svg',
        'node_modules/simple-icons/icons/linkedin.svg',
        'node_modules/simple-icons/icons/untappd.svg'
        ])
        .pipe(gulp.dest('static/images/icons'));
    gulp.src('src/images/notist.svg')
        .pipe(gulp.dest('static/images/icons'));
});

// Watch asset folder for changes
gulp.task('deploy', ['scss', 'scss:lint', 'js', 'icons']);

// Watch asset folder for changes
gulp.task('watch', ['scss', 'scss:lint', 'js', 'icons'], () => {
    gulp.watch('src/scss/**/*', ['scss']);
    gulp.watch('src/js/**/*', ['js']);
});

// Set watch as default task
gulp.task('default', ['watch']);
