const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const template          = require('html-webpack-template');

const BUILD_DIR = path.join(__dirname, './dist');
const APP_DIR = path.join(__dirname, './src');

// get the node env used to run the script with, and set to development if undefined
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
// set the public path, using the CDN if deploying to production
const publicPath = nodeEnv === 'production' ? 'https://cdn.tanachstudy.com/assets' : '/';
// set the URL of the API server, using the localhost if running in development
const apiURL = nodeEnv === 'production'
  ? JSON.stringify('https://api.tanachstudy.com')
  : JSON.stringify('http://localhost:3000');
const tanachURL = nodeEnv === 'production'
  ? JSON.stringify('https://cdn.tanachstudy.com/assets/tanach')
  : JSON.stringify('/tanach');

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  }),
  new webpack.ProvidePlugin({
    fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
  }),
  new webpack.DefinePlugin({
    API_URL: apiURL,
    TANACH_URL: tanachURL,
  }),
  new HtmlWebpackPlugin({
    inject: false,
    filename: 'index.html',
    template,
    appMountId: 'root-container',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        content: 'ie=edge',
        'http-equiv': 'x-ua-compatible',
      },
      {
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
        name: 'viewport',
      },
      {
        content: 'Content-Type',
        name: 'http-equiv',
      },
      {
        content: 'text/html; charset=UTF-8',
        name: 'content',
      },
      {
        property: 'og:title',
        content: 'Tanach Study',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://tanachstudy.com',
      },
      {
        property: 'og:image',
        content: 'https://tanachstudy.com/original-favicon.png',
      },
      {
        property: 'og:description',
        content: 'Tanach Study is a modern, web based platform for the study of the 24 books of '
        + 'Tanach',
      },
      {
        name: 'theme-color',
        content: '#009fc1',
      },
    ],
    mobile: false,
    lang: 'en-US',
    links: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#009fc1',
      },
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css',
    ],
    title: 'Tanach Study',
  }),
];

// Common rules
const rules = [
  {
    test: /\b(?!global\.)(\w+(?:-\w+)*)(?=\.css\b)/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    }),
  },
  {
    test: /\.global\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    }),
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
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.gif$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.jpg$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.png$/,
    loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]',
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=/fonts/[name].[ext]',
  },
];

module.exports = {
  context: APP_DIR,
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    publicPath,
    filename: '[name].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      APP_DIR,
    ],
  },
  plugins,
};
