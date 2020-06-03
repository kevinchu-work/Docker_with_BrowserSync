'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});


gulp.task('browser-sync', gulp.series('nodemon', function () {
  browserSync.init(null, {
    // open: false,
    proxy: "http://localhost:3000",
    files: ["**/*.js"],
    port: 5000,
    notify: true
  });
}));

gulp.task('default', gulp.series('browser-sync', function () {
}));
