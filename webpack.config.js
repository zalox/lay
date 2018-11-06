const path = require('path');

const outputPath = path.join(__dirname, 'srv');

module.exports = {
  entry: {
    lay: './src/index.jsx',
  },
  output: {
    path: outputPath,
    filename: 'js/[name].js',
    publicPath: '/srv/',
  },
  devServer: {
    contentBase: outputPath,
  },
  module: {
    rules: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  mode: 'development',
};
