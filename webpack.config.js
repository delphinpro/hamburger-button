const path           = require('path');
const webpack        = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg            = require('./package.json');

const banner = `Hamburger button
@author      ${pkg.author}
@copyright   copyright © 2017—2018 delphinpro
@license     licensed under the ${pkg.license} license
@version     ${pkg.version}

https://github.com/delphinpro/hamburger-button`;

module.exports = {
    mode: 'production',
    watch: true,

    entry: './src/hamburger.js',

    output: {
        path         : path.join(__dirname, 'dist'),
        filename     : 'hamburger.js',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test  : /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },

    resolve: {
        modules   : ['node_modules'],
        extensions: ['.js'],
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap    : false,
                parallel     : true,
                uglifyOptions: {
                    warnings: false,
                    output  : {
                        comments: /^\**!|@preserve/,
                    },
                },
            }),
        ],
    },

    plugins: [
        new webpack.BannerPlugin({
            banner,
        }),
    ],

    context: __dirname,

    target: 'web',
};
