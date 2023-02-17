export const BUILD = {
    dev: './dist/',
    prod: './public/',
};

export const PATH = {
    fonts: {
        dist: {
            dev: `${BUILD.dev}assets/fonts/`,
            prod: `${BUILD.prod}assets/fonts/`,
        },
        watch: ["src/assets/fonts/**/*.*"],
        src: ["src/assets/fonts/**/*.*"],
    },
    icons: {
        dist: {
            dev: `${BUILD.dev}assets/icons/`,
            prod: `${BUILD.prod}assets/icons/`,
        },
        src: ["src/assets/icons/*.svg"],
        watch: ["src/assets/icons/*.svg"],
    },
    image: {
        dist: {
            dev: `${BUILD.dev}assets/images/`,
            prod: `${BUILD.prod}assets/images/`,
        },
        src: ["src/assets/images/**/*.*"],
        watch: ["src/assets/images/**/*.*"],
    },
    pug: {
        dist: {
            dev: BUILD.dev,
            prod: BUILD.prod,
        },
        src: "src/pages/**/*.pug",
        watch: [
            "gulp/mock.js",
            "src/assets/icons/*.svg",
            "src/blocks/**/*.pug",
            "src/blocks/**/*.json",
            "src/components/**/*.pug",
            "src/layouts/*.pug",
            "src/UI/**/*.pug",
            "src/pages/**/*.pug",
        ],
    },
    script: {
        dist: {
            dev: `${BUILD.dev}assets/js/`,
            prod: `${BUILD.prod}assets/js/`,
        },
        src: {
            app: "src/assets/js/app.js",
            vendor: "src/assets/js/vendor.js",
        },
        watch: [
            "src/assets/js/**/*.js",
            "src/assets/js/*.js",
            "src/blocks/**/*.js",
            "src/UI/**/*.js",
            "src/pages/**/*.js",
        ],
    },
    scss: {
        dist: {
            dev: `${BUILD.dev}assets/css/`,
            prod: `${BUILD.prod}assets/css/`,
        },
        src: {
            app: "src/assets/scss/style.scss",
            vendor: "src/assets/scss/vendor.scss",
            page: "src/pages/**/*.scss",
        },
        watch: [
            "src/assets/scss/**/*.scss",
            "src/blocks/**/*.scss",
            "src/UI/**/*.scss",
            "src/pages/**/*.scss",
        ],
    },
};
