'use strict';

const path = {
    build: {
        html: 'assets/build/',
        js: 'assets/build/js/',
        css: 'assets/build/css/',
        img: 'assets/build/img/',
        fonts: 'assets/build/fonts/'
    },
    src: {
        html: 'assets/src/*.html',
        js: 'assets/src/js/*.js',
        style: 'assets/src/style/main.scss',
        img: 'assets/src/img/**/*.*',
        fonts: 'assets/src/fonts/**/*.*'
    },
    watch: {
        html: 'assets/src/**/*.html',
        js: 'assets/src/js/**/*.js',
        css: 'assets/src/style/**/*.scss',
        img: 'assets/src/img/**/*.*',
        fonts: 'assets/srs/fonts/**/*.*'
    },
    clean: './assets/build/*'
};

let isDevelopment = true;
let isTest = false;


const   gulp           = require('gulp'),
        browserSync    = require('browser-sync').create(),
        sourcemaps     = require('gulp-sourcemaps'),
        sass           = require('gulp-sass'),
        autoprefixer   = require('gulp-autoprefixer'),
        cleanCSS       = require('gulp-clean-css'),
        uglify         = require('gulp-uglify-es').default,
        cache          = require('gulp-cache'),
        imagemin       = require('gulp-imagemin'),
        notify         = require('gulp-notify'),
        jpegrecompress = require('imagemin-jpeg-recompress'),
        pngquant       = require('imagemin-pngquant'),
        rimraf         = require('gulp-rimraf'),
        rigger         = require('gulp-rigger'),
        gcmq           = require('gulp-group-css-media-queries'),
        rename         = require('gulp-rename'),
        newer          = require('gulp-newer'),
        gulpif         = require('gulp-if');

function html() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
}

function styles() {
    return gulp.src(path.src.style)
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(gulpif(!isDevelopment, gcmq()))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(gulpif(!isTest, cleanCSS()))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream())
}

function script() {
    return gulp.src(path.src.js)
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(gulpif(!isDevelopment, uglify()))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({ stream: true }))
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream())
}

function images() {
    return gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(cache(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream())
}

function clean() {
    return gulp.src(path.clean, { read: false })
        .pipe(rimraf());
}

function readyReload(cb) {
    browserSync.reload()
    cb()
}

function serve(cb) {
    browserSync.init({
        server: {
            baseDir: './assets/build',
            directory: true
        },
        notify: true
    })

    gulp.watch(path.watch.html, gulp.series(html, readyReload));
    gulp.watch(path.watch.css, gulp.series(styles));
    gulp.watch(path.watch.js, gulp.series(script));
    gulp.watch(path.watch.img, gulp.series(images));
    gulp.watch(path.watch.fonts, gulp.series(fonts));

    return cb()
}

const dev = gulp.parallel(html, styles, script, images, fonts)

const build = gulp.series(clean, dev)

exports.start = gulp.series(build, serve)

exports.default = gulp.series(build, serve)


exports.build = gulp.series((cb) => {
    isDevelopment = false;
    cb();
}, build)

exports.test = gulp.series((cb) => {
    isTest = true;
    isDevelopment = false;
    cb();
}, build)