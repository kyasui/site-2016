'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyVideo', function() {

  return gulp.src([config.sourceDir + 'video/**/*'])
    .pipe(gulp.dest(config.buildDir + 'video/'));

});
