const path = require('path');

module.exports = {
  entry: './index.src.js',

  output: {
    path         : path.resolve(__dirname),
    filename     : 'index.js',
    library      : 'hamburgerButton',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },

  resolve: {
    modules   : ['node_modules'],
    extensions: ['.js'],
  },

  context: __dirname,

  target : 'web',
};
