const webpack = require('webpack');
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
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    },
    {
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      loader: 'elm-webpack',
    }],
  },
};
