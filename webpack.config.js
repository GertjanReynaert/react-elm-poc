const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    './app/index.js',
  ],

  output: {
    path: './bundle',
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    root: __dirname,
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // never add this one if --hot is in cli
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: env === 'development',
      __PROD__: env === 'production',
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!postcss!sass',
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ttf$|\.eot$|\.woff$|\.woff2$|\.ico$/,
      loader: 'file',
    }, {
      test: /\.json$/,
      loader: 'json',
    },
    {
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      loader: 'elm-webpack',
    },
    ],
  },

  postcss: [autoprefixer()],
};
