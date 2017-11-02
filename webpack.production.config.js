const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.config');

module.exports = merge(config, {
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
});
