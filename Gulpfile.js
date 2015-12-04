var gulp = require("gulp");
var bower = require("gulp-bower");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var config = {
    out: "dist/js",
    src: "src/js/*.*",
    css: "src/css/*.*"
};

gulp.task("restore", function () {
    return bower();
});

gulp.task("copy", function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.out));
});

gulp.task("minify", function () {
    return gulp.src(config.src)
        .pipe(uglify({preserveComments: "license"}))
        .pipe(rename("kendo.message.min.js"))
        .pipe(gulp.dest(config.out));
});

gulp.task("css", function () {
    return gulp.src(config.css)
        .pipe(gulp.dest("dist/css"));
});

gulp.task("default", ["copy", "minify", "css"], function () {
});