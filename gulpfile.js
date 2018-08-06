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

// hash images
gulp.task('images', () => {
    del(['static/images/**/*']);
    gulp.src('src/images/**/*')
        .pipe(hash())
        .pipe(gulp.dest('static/images'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/images'));
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
});

// copy RSS feed to old directory
gulp.task('rss', () => {
    del(['public/feed/*']);
    gulp.src('public/posts/index.xml')
        .pipe(gulp.dest('public/feed'));
});

// Watch asset folder for changes
gulp.task('watch', ['scss', 'scss:lint', 'images', 'js', 'icons', 'rss'], () => {
    gulp.watch('src/scss/**/*', ['scss']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/js/**/*', ['js']);
});

// Set watch as default task
gulp.task('default', ['watch']);
