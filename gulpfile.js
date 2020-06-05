'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'app.js',
    env: {
      port: 3000
    },
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  }).on('start', function () {
    if (!started) {
      started = true;
      cb();
    }
  });
});

gulp.task('browser-sync', gulp.series(['nodemon'], function () {
// gulp.task('browser-sync', function () {
  browserSync.init('*.js', {
    open: false,
    proxy: "localhost:3000",
    // files: ["**/*.js"],
    // port: 3000,
    // notify: false
  });
// });
}));

gulp.task('default', gulp.series('browser-sync', function () {
  gulp.watch(["*.*"], function() { console.log("sync"); browserSync.reload; });
}));
