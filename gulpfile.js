var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var browserify = require("browserify"); // for modules binding
var source = require('vinyl-source-stream'); // form gulp stream
var tsify = require("tsify"); // for typescript compiler
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var cssmin = require('gulp-cssmin'); // css minify
var rename = require('gulp-rename'); // css rename to .min 
var log = require('fancy-log');
var rimraf = require('rimraf'); // delete dist folder
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var views = {
    pages: ['src/Views/*.html']
};

// LESS
gulp.task('less', function () {
    return gulp.src('./src/Style/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(cssmin())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./dist/css'));
});

// Copy views to dist folder
gulp.task("copy-html", function () {
    return gulp.src(views.pages)
        .pipe(gulp.dest("dist"));
});

// ES compile
gulp.task('esCompile', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

// Typescript compile
gulp.task("TS-compile",function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/Ts/index.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: false}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./dist/js"));
});

// Cleaner
gulp.task('cleaner', function (cb) {
    rimraf('./dist', cb);
 });

// Main task:
gulp.task("default", ["copy-html","less", "esCompile", "TS-compile"], function () {});