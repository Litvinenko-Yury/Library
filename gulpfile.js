"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const webpack = require('webpack-stream'); // webpack
const ghPages = require('gh-pages');
const path = require('path');

//удаляем папку build.
gulp.task("cleanFolderBuild", function () {
  return del("build");
});

//копируем папки из папки source в папку build.
gulp.task("copyFolderBuild", function () {
  return gulp.src([
    "source/favicons/**",
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    //"source/js/*/*", // это было в отдельном task
    "source/js/ofi.min.js",
    "source/js/picturefill.min.js",
    "!source/js/README"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

//копируем папку JS из папки source в папку build.
gulp.task("copyJsBuild", function () {
  return gulp.src([
    "source/js/modules2/check-browser.js"
    //"!source/js/README"
  ], {
    base: "source/js/modules2"
  })
    .pipe(gulp.dest("build/js"));
});

/*делаем из scss-файлов css-файл (gulp-sass), далее расставляем префиксы (postcss + autoprefixer), далее минифицируем css-файл (gulp-csso), переименовываем (gulp-rename) его в "style.min.css", и сохраняем в build/css.*/
gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    /*.pipe(sass())*/
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

//собрать svg-спрайт (gulp-svgstore), переименовать спрайт в "svg_sprite.svg" (gulp-rename), и сохранить в build/img.
gulp.task("svg_sprite", function () {
  return gulp.src("source/img/vector/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("svg_sprite.svg"))
    .pipe(gulp.dest("build/img/vector"));
});

//инклюдим svg-спрайт в разметку html-файла
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

//минификация html-файлов
gulp.task("minify_html", function () {
  return gulp.src("build/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

//webpack
gulp.task('webpack', function () {
  return gulp.src('source/js/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/js'));
});

//локальный сервер (browser-sync).
gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  //используем browser-sync для перезапуска страницы
  gulp.task("refresh", function (done) {
    server.reload();
    done();
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("source/img/icon-*.svg", gulp.series("svg_sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  //gulp.watch("source/js/*.js", gulp.series("copyJsBuild", "refresh"));
  gulp.watch("source/js/**/*.js", gulp.series("webpack", "refresh"));
  //gulp.watch("source/js/*.js", gulp.series("minify_js", "refresh"));
});

//----------------------------------------------------------------
gulp.task("build", gulp.series(
  "cleanFolderBuild",
  "copyFolderBuild",
  'copyJsBuild',
  "css",
  "svg_sprite",
  "html",
  "minify_html",
  "webpack"
));

gulp.task("start", gulp.series("build", "server"));

//----------------------------------------------------------------
//оптимизируем PNG-JPEG-SVG (gulp-imagemin)
gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

//конвертируем jpg в webp (gulp-webp)
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 75 }))
    .pipe(gulp.dest("source/img"));
});

//задача публикации на gh-pages
function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;
