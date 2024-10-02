const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const hash = require('gulp-hash');
//const del = require('del');
const gulpStylelint = require('gulp-stylelint');

// compile SCSS files to CSS
gulp.task('scss', gulp.series(function(done) {
    //del(['static/css/**/*']);
    gulp.src('src/scss/main.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(hash())
        .pipe(gulp.dest('static/css'))
        //Create a hash map
        .pipe(hash.manifest('hash.json'))
        //Put the map in the data directory
        .pipe(gulp.dest('data/css'));
    done();
}));

// lint SCSS files
gulp.task('scss:lint', gulp.series(function(done) {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
    done();
}));

// hash javascript
gulp.task('js', gulp.series(function(done) {
    //del(['static/js/**/*']);
    gulp.src('src/js/**/*')
        .pipe(hash())
        .pipe(gulp.dest('static/js'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/js'));
    done();
}));

// copy fonts to public folder
gulp.task('fonts', gulp.series(function(done) {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('static/fonts'));
    done();
}));

// copy icons to public folder
gulp.task('icons', gulp.series(function(done) {
    //del(['static/images/icons/*']);
    gulp.src([
        'node_modules/simple-icons/icons/github.svg',
        'node_modules/simple-icons/icons/pinboard.svg',
        'node_modules/simple-icons/icons/twitter.svg',
        'node_modules/simple-icons/icons/linkedin.svg',
        'node_modules/simple-icons/icons/untappd.svg'
        ])
        .pipe(gulp.dest('static/images/icons'));
    gulp.src('src/images/notist.svg')
        .pipe(gulp.dest('static/images/icons'));
    done();
}));

// Watch asset folder for changes
gulp.task('deploy', gulp.series('scss', 'scss:lint', 'js', 'fonts', 'icons'));

// Watch asset folder for changes
gulp.task('watch', gulp.series('scss', 'scss:lint', 'js', 'fonts', 'icons', () => {
    gulp.watch('src/scss/**/*', gulp.series('scss'));
    gulp.watch('src/js/**/*', gulp.series('js'));
}));

// Set watch as default task
gulp.task('default', gulp.series('watch'));
