import bs from 'browser-sync';
import { BUILD } from '../gulp.path';

export const Serve = (done) => {
    bs.init({
        server: {
            baseDir: BUILD.dev,
            index: '/home/index.html',
        },
        ghostMode: true,
        notify: false,
        host: '0.0.0.0',
        port: 9000,
    });

    done();
};
