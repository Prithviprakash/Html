const gulp = require('gulp');
const changed = require('gulp-changed');
const watch = require('gulp-watch');
const debug = require('gulp-debug');
var gutil = require('gulp-util');
const SRC = 'web/';
const DEST = 'G:/Softwares/webserver/apache-tomcat-8.0.27/apache-tomcat-8.0.27/webapps/mk';
console.log("Jboss Destination"+DEST);
gulp.task('css', function() {
    return gulp.src(SRC+'scripts/ChatScripts/**/*.css')
	.pipe(watch(SRC+'scripts/ChatScripts/**/*.css'))
        .pipe(changed('app', {hasChanged: changed.compareSha1Digest}))
        .pipe(gulp.dest(DEST+'/scripts/ChatScripts/'))
        .pipe(debug());;
});
gulp.task('jsp', function() {
    return gulp.src(SRC+'/pages/**/*.jsp')
	.pipe(watch(SRC+'/pages/**/*.jsp'))
        .pipe(changed('app', {hasChanged: changed.compareSha1Digest}))
        .pipe(gulp.dest(DEST+'/WEB-INF/pages/'))
        .pipe(debug());;
});

gulp.task('js', function() {
    return gulp.src(SRC+'scripts/ChatScripts/**/*.js')
	.pipe(watch(SRC+'scripts/ChatScripts/**/*.js'))
        .pipe(changed('app', {hasChanged: changed.compareSha1Digest}))
        .pipe(gulp.dest(DEST+'/scripts/ChatScripts/'))
        .pipe(debug());;
});

gulp.task('default', function() {
  gulp.start('css', 'jsp','js');
});
