import gulp from "gulp";
// import concat from "gulp-concat";
// import prefix from "gulp-autoprefixer";
// import sass from "gulp-sass";
import pug from "gulp-pug";

// ------ HTML Task
gulp.task("pug", function () {
  return gulp
    .src("./index.pug")
    .pipe(pug()) // pug({ pretty: true })
    .pipe(gulp.dest("./"));
});

// ------ CSS Task
/*
gulp.task("sass", function () {
  return gulp
    .src("./src/index.scss")
    .pipe(sass()) // sass({ outputStyle: "compressed" })
    .pipe(prefix("last 2 versions"))
    .pipe(gulp.dest("./src"));
});
*/
