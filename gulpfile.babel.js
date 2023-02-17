import { parallel, series } from 'gulp';
import { Pug } from './gulp/tasks/pug';
import { Serve } from './gulp/tasks/server';
import { WatchFiles } from './gulp/tasks/watch';
import { Style, StylePage, StyleVendore } from './gulp/tasks/scss';
import { Script } from './gulp/tasks/script';
import { Font } from './gulp/tasks/font';
import { Icons, Image } from './gulp/tasks/image';

const RunServer = parallel(
    WatchFiles,
    Serve,
);

// Сборка
const Build = series(
    Font,
    Image,
    Icons,
    Script,
    series(
        StyleVendore,
        StylePage,
        Style,
    ),
    Pug,
);

const Dev = series(
    Build,
    RunServer,
);

const Prod = series(
    Build,
);

exports.default = Dev;
exports.prod = Prod;
