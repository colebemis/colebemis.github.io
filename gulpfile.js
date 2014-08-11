var gulp = require('gulp');

var stylus = require('gulp-stylus');
var nib = require('nib');

var paths = {
  stylus: './css/stylus/*.styl'
}

gulp.task('stylus', function () {
  gulp.src(paths.stylus)
    .pipe(stylus({use: [nib()], errors: true}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['watch', 'stylus']);
