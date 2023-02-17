import { src, dest } from 'gulp';
import { PATH } from '../gulp.path';
import env from 'gulp-environment';
import bs from 'browser-sync';
// import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

export const Image = (done) => {
    src(PATH.image.src)
        // TODO: Допилить, когда обновят imagemin
        // .pipe(imagemin([
        //     gifsicle({interlaced: true}),
        //     mozjpeg({
        //         quality: 75,
        //         progressive: true,
        //     }),
        //     optipng({optimizationLevel: 5}),
        //     svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false},
        //         ],
        //     }),
        // ]))
        .pipe(env.if.development(dest(PATH.image.dist.dev)).else(dest(PATH.image.dist.prod)))
        .pipe(env.if.development(bs.reload({stream: true})));
    done();
};

export const Icons = (done) => {
    src(PATH.icons.src)
        // TODO: Допилить, когда обновят imagemin
        // .pipe(imagemin([
        //     svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false},
        //         ],
        //     }),
        // ]))
        .pipe(env.if.development(dest(PATH.icons.dist.dev)).else(dest(PATH.icons.dist.prod)))
        .pipe(env.if.development(bs.reload({stream: true})));
    done();
};
