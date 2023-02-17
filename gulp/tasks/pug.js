import { src, dest } from 'gulp';
import { PATH } from '../gulp.path';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import env from 'gulp-environment';
import pug from 'gulp-pug';
import pugLinter from 'gulp-pug-linter';
import bs from 'browser-sync';
import embedSvg from 'gulp-embed-svg';
import mock from '../mock';

// TODO: Добавить таску на W3C

export const Pug = (done) => {
    src(PATH.pug.src)
        .pipe(plumber({errorHandler: notify.onError('Pug: <%= error.message %>')}))
        .pipe(env.if.development(
            pugLinter(),
        ))
        .pipe(env.if.development(
            pugLinter({
                reporter: 'default',
                failAfterError: true,
            }),
        ))
        .pipe(pug({
            pretty: '    ',
            locals: mock,
        }))
        .pipe(embedSvg({
            selectors: '.inline-svg',
            root: './src/assets/icons',
        }))
        .pipe(env.if.development(dest(PATH.pug.dist.dev)).else(dest(PATH.pug.dist.prod)))
        .pipe(env.if.development(bs.reload({stream: true})));
    done();
};
