var gulp = require("gulp");
var sass = require("gulp-sass");

var uglifycss = require("gulp-uglifycss");
var imagemin = require("gulp-imagemin");

gulp.task("sass", function() {
  gulp
    .src("./stylesheet/**/*.scss")
    .pipe(
      sass({
        includePaths: ["node_modules/susy/sass"]
      }).on("error", sass.logError)
    )
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(gulp.dest("static/stylesheet"));
});

gulp.task("optimize", function() {
  gulp
    .src("static/*.{png,gif,ico}")
    .pipe(imagemin())
    .pipe(gulp.dest("static/images"));
});

gulp.task("watch", function() {
  gulp.watch(["./stylesheet/**/*.scss"], ["sass"]);
});

gulp.task("default", ["watch"]);
