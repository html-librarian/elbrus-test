import { src, dest } from 'gulp';
import { PATH } from '../gulp.path';
import env from 'gulp-environment';
import bs from 'browser-sync';

export const Font = (done) => {
    src(PATH.fonts.src)
        .pipe(env.if.development(dest(PATH.fonts.dist.dev)).else(dest(PATH.fonts.dist.prod)))
        .pipe(env.if.development(bs.reload({stream: true})));
    done();
};
