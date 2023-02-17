import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import env from 'gulp-environment';

const production = env.is.production();
console.log(production);

const webpackENV = {
    mode: production ? 'production' : 'development',
    devtools: production ? false : 'source-map',
    pathOutput: production ? 'public/assets/js/' : 'dist/assets/js/',
};

module.exports = {
    mode: webpackENV.mode,
    entry: {
        app: './src/assets/js/app.js',
        vendor: './src/assets/js/vendor.js',
        home: './src/pages/home/home.js',
    },
    output: {
        path: path.resolve(__dirname, webpackENV.pathOutput),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devtool: webpackENV.devtools,
};
