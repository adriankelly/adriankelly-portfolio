'use strict'

import gulp from 'gulp';
import babel from 'gulp-babel';
import server from 'gulp-server-livereload';



// gulp.task('watch', () => {
//   refresh.listen()
// })

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('default', ['webserver']);