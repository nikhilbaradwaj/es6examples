var gulp = require('gulp');
var babel = require('gulp-babel');
var karma = require('karma').server;
var traceur = require('gulp-traceur');
var code = 'es6/**/*.js';


gulp.task('6to5', function () {
    return gulp.src(code)
        .pipe(babel())
        .pipe(gulp.dest('es5-babel'));
});

gulp.task('traceur', function () {
    return gulp.src(code)
        .pipe(traceur())
        .pipe(gulp.dest('es5-traceur'));
});


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('watch', function () {
    gulp.watch(code, ['6to5']);
});

gulp.task('default', ['watch', '6to5', 'traceur']);
