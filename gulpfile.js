'use strict';

const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const nunjucksRender = require('gulp-nunjucks-render');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');

function buildDir(childPath = '/') {
  return `./public${childPath}`;
}

function srcDir(childPath = '/') {
  return `./src${childPath}`;
}

// necessary pages must be specified
const pages = [
  'src/templates/index.nunj',
];

function buildScss() {
  return gulp.src(srcDir('/sass/style.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(buildDir('/css')));
}

function buildImages() {
  return gulp.src(srcDir('/img/**/*'))
  .pipe(imagemin())
  .pipe(gulp.dest(buildDir('/img')))
}

function copyImg() {
  return  gulp.src(srcDir('/img/**/*'))
  .pipe(gulp.dest(buildDir('/img')));
};

function nunjBuild() {
  return gulp.src(pages)
  .pipe(nunjucksRender({
    path: 'src/templates'
  }))
  .pipe(gulp.dest(buildDir()))
}

function clean() {
  return (del([buildDir('/**/*.*')]))
}

function jsBuild() {
  return gulp.src(srcDir('/js/**/*'))
  .pipe(minify())
  .pipe(gulp.dest(buildDir('/js')))
}

gulp.task('sass:build', buildScss);
gulp.task('img:build', buildImages);
gulp.task('img:copy', copyImg);
gulp.task('nunj:build', nunjBuild);
gulp.task('js:build', jsBuild);
gulp.task('clean', clean);
gulp.task('build', gulp.series(clean, gulp.parallel(buildImages, nunjBuild, jsBuild, buildScss)));

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: buildDir(),
      }
  });
});
