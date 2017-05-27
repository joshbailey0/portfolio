var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssimport = require('postcss-import');

gulp.task('default', function() {
  // place code for your default task here
  console.log("default thing");
});


gulp.task('html', function() {
  // place code for your default task here
  console.log("html thing");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/app.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/dist/styles'));
  // place code for your default task here
});



// ------------------ GULP WATCH ------------------------
gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });


  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
