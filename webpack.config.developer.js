const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'bundle': [
      'es6-shim',
      'rxjs',
      'zone.js',
      'reflect-metadata',
      './src/app/main.ts'
    ]
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: './src/build/',
    publicPath: '/build/'
  },
  resolve: {
    root: __dirname,
    extensions: ['','.js','.jsx','.ts','.json', '.scss', '.css', '.html']
  },
  module: {
    loaders: [
      // Support for .ts files.
      {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader','angular2-template-loader'],
          exclude: [/node_modules/]
      },
      
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

      { test: /\.jade$/,  loader: 'pug-html-loader' },

      // Support for image files + compression.
      {
        test: /\.scss$/,
        loaders: ['exports-loader?module.exports.toString()', 'css', 'sass', "sass-resources"]
      },

      // support for .css as raw text
      { test: /\.css$/,  loader: 'raw' },

      // Support for font files.
      {
        test: /\.(woff|woff2|otf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          "file?name=fonts/[name].[hash].[ext]"
          ]
      },

      {
        test: /\.(png|jpg|jpe?g|gif|ico)(\?[a-z0-9]+)?$/,
        loaders: [
          'file?name=images/[name].[hash].[ext]',
          'img?minimize&optimizationLevel=7&progressive=true'
        ]
      },

      // support for .css as raw text
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  sassResources: [
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss'
  ],
  plugins: [
    new BrowserSyncPlugin({host: 'localhost',port: 3100,proxy: 'http://localhost:3000'},{reload: true})
  ]
}