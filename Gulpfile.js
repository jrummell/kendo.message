const { src, dest, parallel } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

var config = {
    src: { js: "src/js/*.js", css: "src/css/*.css" },
    dist: { js: "dist/js", css: "dist/css" }
};

function minify() {
    return src(config.src.js)
        .pipe(uglify({ output: { comments: "some" } }))
        .pipe(rename("kendo.message.min.js"))
        .pipe(dest(config.dist.js));
}

function css() {
    return src(config.src.css).pipe(dest(config.dist.css));
}

exports.minify = minify;
exports.css = css;
exports.default = parallel(minify, css);
