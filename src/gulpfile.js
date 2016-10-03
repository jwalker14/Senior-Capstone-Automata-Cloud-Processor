var gulp = require('gulp');
var install = require("gulp-install");

gulp.task('install', function() {
  gulp.src(['./package.json','./APServer/package.json', './html/package.json', './html/src/bower.json'])
    .pipe(install());
})