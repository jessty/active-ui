var config = require('./webpack.config.js');
var path = require('path');

config.entry = {
  'ActiveUI': './src/index.js'
}

config.output = {
  path: path.resolve(__dirname, "dist"),
  filename: '[name].js',
  libraryTarget: 'umd'
}

module.exports = config
