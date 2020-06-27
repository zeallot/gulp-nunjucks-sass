const gulp = require('gulp');
const del = require('del');
const nunjucksRender = require('gulp-nunjucks-render');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const htmlbeautify = require('gulp-html-beautify');
sass.compiler = require('node-sass');

htmlOptions = {
    "indent_size": 2,
    "indent_char": " ",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 0,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": false
}

function buildDir(childPath = '/') {
    return `./public${childPath}`;
}

function srcDir(childPath = '/') {
    return `./src${childPath}`;
}

const pages = [
    'src/templates/index.nunj',
    'src/templates/about-us.nunj',
];

function buildScss() {
    return gulp.src(srcDir('/sass/styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(buildDir('/css')))
        .pipe(browserSync.stream());
}

function buildImages() {
    return gulp.src(srcDir('/img/**/*'))
        .pipe(imagemin())
        .pipe(gulp.dest(buildDir('/img')))
        .pipe(browserSync.reload({
            stream: true
        }));
}

function copyImg() {
    return  gulp.src(srcDir('/img/**/*'))
        .pipe(gulp.dest(buildDir('/img')));
}

function nunjBuild() {
    return gulp.src(pages)
        .pipe(nunjucksRender({
            path: 'src/templates'
        }))
        .pipe(htmlbeautify(htmlOptions))
        .pipe(gulp.dest(buildDir()))
        .pipe(browserSync.reload({
            stream: true
        }));
}

function clean() {
    return (del([buildDir('/**/*.*')]))
}

function fonts() {
    return gulp.src(srcDir('/fonts/*'))
        .pipe(gulp.dest(buildDir('/fonts')))
        .pipe(browserSync.reload({
            stream: true
        }));
}

function jsBuild() {
    return gulp.src(srcDir('/js/**/*'))
        .pipe(minify())
        .pipe(gulp.dest(buildDir('/js')))
        .pipe(browserSync.reload({
            stream: true
        }));
}

gulp.task('sass:build', buildScss);
gulp.task('img:build', buildImages);
gulp.task('img:copy', copyImg);
gulp.task('nunj:build', nunjBuild);
gulp.task('js:build', jsBuild);
gulp.task('clean', clean);
gulp.task('fonts', fonts);
gulp.task('build', gulp.series(clean, gulp.parallel(buildImages, nunjBuild, jsBuild, buildScss)));
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: buildDir(),
            index: 'index.html',
        },
    });

    gulp.watch(srcDir('/templates/**/*'), gulp.series('nunj:build'));
    gulp.watch(srcDir('/sass/**/*'), gulp.series('sass:build'));
    gulp.watch(srcDir('/js/**/*'), gulp.series('js:build'));
    gulp.watch(srcDir('/img/**/*'), gulp.series('img:build'));
    gulp.watch(srcDir('/fonts/*'), gulp.series('fonts'));
});
gulp.task('default', gulp.series('build', 'watch'));