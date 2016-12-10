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
    extensions: ['.js','.jsx','.ts','.json', '.scss', '.css', '.html']
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
      { test: /\.json$/,  loader: 'json-loader' },

      { test: /\.(jade|pug)$/,  loader: 'pug-html-loader' },

      // Support for image files + compression.
      {
        test: /\.scss$/,
        loaders: ['exports-loader?module.exports.toString()', 'css-loader', 'sass-loader']
      },

      // support for .css as raw text
      { test: /\.css$/,  loader: 'raw-loader' },

      // Support for font files.
      {
        test: /\.(woff|woff2|otf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          "file-loader?name=fonts/[name].[hash].[ext]"
          ]
      },

      {
        test: /\.(png|jpg|jpe?g|gif|ico)(\?[a-z0-9]+)?$/,
        loaders: [
          'file-loader?name=images/[name].[hash].[ext]',
          'img-loader?minimize&optimizationLevel=7&progressive=true'
        ]
      },

      // support for .css as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        sassResources: [
          //'demo.scss'
        ],
        sassLoader: {
          includePaths: [path.resolve(__dirname, "./src/assets")]
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            warnings: false,
            screw_ie8: true
        },
        comments: false
    }),
    new BrowserSyncPlugin({host: 'localhost',port: 3100,proxy: 'http://localhost:3000'},{reload: true})
  ]
}