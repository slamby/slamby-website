const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'bundle': [
      './tmp/app/main.ts'
    ]
  },
  devtool: 'eval',
  output: {
    filename: 'bundle.min.js',
    path: './build/',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.json', '.scss', '.css', '.html']
  },
  module: {
    loaders: [
      {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader','angular2-template-loader'],
          exclude: [/node_modules/]
      },
      
      // support for .css as raw text
      { test: /\.css$/,  loader: ['raw-loader'] },

      // support for .css as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({host: 'localhost',port: 3100,proxy: 'http://localhost:3000'},{reload: true})
  ]
}