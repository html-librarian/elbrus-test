import { src, dest } from 'gulp';
import { PATH } from '../gulp.path';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import env from 'gulp-environment';
import bs from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minify from 'postcss-minify';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const plugins = {
    dev: [
        autoprefixer(),
    ],
    prod: [
        autoprefixer(),
        minify(),
    ],
};

export const Style = (done) => {
    src(PATH.scss.src.app)
        .pipe(plumber({errorHandler: notify.onError('SCSS: <%= error.message %>')}))
        .pipe(env.if.development(sourcemaps.init()))
        .pipe(sass())
        .pipe(env.if.development(postcss(plugins.dev)).else(postcss(plugins.prod)))
        .pipe(env.if.development(sourcemaps.write()))
        .pipe(rename('style.min.css'))
        .pipe(env.if.development(dest(PATH.scss.dist.dev)).else(dest(PATH.scss.dist.prod)))
        .pipe(env.if.development(bs.stream()));
    done();
};

export const StylePage = (done) => {
    src(PATH.scss.src.page)
        .pipe(plumber({errorHandler: notify.onError('SCSS: <%= error.message %>')}))
        .pipe(env.if.development(sourcemaps.init()))
        .pipe(sass())
        .pipe(env.if.development(postcss(plugins.dev)).else(postcss(plugins.prod)))
        .pipe(env.if.development(sourcemaps.write()))
        .pipe(rename((path) => {
            path.dirname += '/';
            path.basename = 'style.min';
            path.extname = '.css';
        }))
        .pipe(env.if.development(dest(PATH.scss.dist.dev)).else(dest(PATH.scss.dist.prod)))
        .pipe(env.if.development(bs.stream()));
    done();
};

export const StyleVendore = (done) => {
    src(PATH.scss.src.vendor)
        .pipe(sass())
        .pipe(rename('vendor.min.css'))
        .pipe(env.if.development(dest(PATH.scss.dist.dev)).else(dest(PATH.scss.dist.prod)))
        .pipe(env.if.development(bs.stream()));
    done();
};
