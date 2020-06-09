'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync');
let nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
	
  let started = false;  // Avoid duplicated execution

  return nodemon({
    script: 'app.js',
    ignore: [
      // 'gulpfile.js',   // It is up to you
      'node_modules/'
    ]
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


gulp.task('browser-sync', gulp.series('nodemon', () => {
  browserSync.init(null, {
    files: ["**/*.*"],
    proxy: "http://localhost:3000",
    port: 5000,
    open: false,  // Disable for Docker environment
    browser: ["google chrome", "firefox"],
    reloadDelay: 1000,
    timestamps: true,
  });
}));

gulp.task('default', gulp.series('browser-sync', () => { }));