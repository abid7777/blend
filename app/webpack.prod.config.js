/* eslint-disable import/no-extraneous-dependencies */

const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].min.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
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
    new webpack.DefinePlugin({
      'process.env': {
        SANITY_API_VERSION: JSON.stringify('v2022-04-26'),
        SANITY_DATASET: JSON.stringify('production'),
        SANITY_PROJECT_ID: JSON.stringify('lw3e8r5q'),
      },
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.[contenthash].html',
      scriptLoading: 'module',
    }),
  ],
  optimization: {
    nodeEnv: 'production',
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
