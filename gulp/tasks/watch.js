import { watch, parallel } from 'gulp';
import { PATH } from '../gulp.path';
import { Icons, Image } from './image';
import { Pug } from './pug';
import { Style, StylePage, StyleVendore } from './scss';
import { Script } from './script';
import { Font } from './font';

export const WatchFiles = (done) => {
    watch(PATH.pug.watch, Pug);
    watch(PATH.scss.watch, parallel(Style, StylePage, StyleVendore));
    watch(PATH.image.watch, Image);
    watch(PATH.icons.watch, Icons);
    watch(PATH.fonts.watch, Font);
    watch(PATH.script.watch, Script);
    done();
};
