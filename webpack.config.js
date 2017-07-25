const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.join(__dirname, './dist');
const APP_DIR = path.join(__dirname, './src');

const plugins = [
  new ExtractTextPlugin({
    filename: '/css/[name].css',
    allChunks: true,
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
 }),
];

// Common rules
const rules = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    })
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.svg$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
  },
  {
    test: /\.gif$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
  },
  {
    test: /\.jpg$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
  },
  {
    test: /\.png$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]'
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]'
  }
];

module.exports = {
  context: APP_DIR,
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      APP_DIR,
    ],
  },
  plugins,
};
