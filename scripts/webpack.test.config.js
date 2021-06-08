const path = require('path');
const webpackBase = require('./webpack.base.config');

const { resolve } = path;

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, '../src/test/index.js'),
  output: {
    filename: './js/[name].js',
    path: resolve(__dirname, '../lib')
  },
  resolve: webpackBase.resolve,
  module: webpackBase.module,
  devServer: webpackBase.devServer,
  plugins: [
    webpackBase.plugins.html,
    webpackBase.plugins.DefinePlugin,
  ],
  devtool: webpackBase.devtool
}

