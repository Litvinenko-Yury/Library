'use strict';

const path = require('path'); // техническая переменная, нужна для правильной работы

module.exports = {
  mode: 'development',
  entry: {
    bundle1: './source/js/entry.js',
    bundle2: './source/js/entry2.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build/js'
  },
  watch: false,

  devtool: "source-map",

  module: {
    // rules: [
    //   {
    //     test: /\.m?js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: [['@babel/preset-env', {
    //           debug: true,
    //           corejs: 3,
    //           useBuiltIns: "usage"
    //         }]]
    //       }
    //     }
    //   }
    // ]
  }
};
