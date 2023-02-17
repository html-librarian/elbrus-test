import { src, dest } from 'gulp';
import env from 'gulp-environment';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpackStream from 'webpack-stream';
import bs from 'browser-sync';
import eslint from 'gulp-eslint';
import webpackConfig from '../../webpack.config';

export const Script = (done) => {
    src(webpackConfig.entry.app, webpackConfig.entry.vendor)
        .pipe(plumber({errorHandler: notify.onError('JS: <%= error.message %>')}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(webpackStream(webpackConfig))
        .pipe(dest(webpackConfig.output.path))
        .pipe(env.if.development(bs.reload({stream: true})));
    done();
};

