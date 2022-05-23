/* eslint-disable import/no-extraneous-dependencies */

const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'blend.min.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
