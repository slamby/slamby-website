const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'bundle': './src/app/main.ts'
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: './dist/',
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

      { test: /\.(jade|pug)$/,  loader: 'pug-html-loader' },

      // Support for image files + compression.
      {
        test: /\.scss$/,
        loaders: ['exports-loader?module.exports.toString()', 'css-loader', 'sass-loader']
      },

      // support for .css as raw text
      { test: /\.css$/,  loader: 'raw-loader' },

      {
        test: /\.css$/,
        exclude: path.resolve(process.cwd(), 'src', 'app'),
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader"
        })
      },

      {
        test: /\.scss$/,
        exclude: path.resolve(process.cwd(), 'src', 'app'),
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: ["css-loader", "sass-loader"]
        })
      },

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
    new ExtractTextPlugin("style.css"),
    new CopyWebpackPlugin([
      { from: 'src/assets/favicon.png' },
      { from: 'src/google-analytics.js' },
      { from: 'node_modules/zone.js/dist/zone.js', to: 'zone.js'},
      { from: 'node_modules/reflect-metadata/Reflect.js', to: 'reflect.js'}
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),
    new BrowserSyncPlugin({host: 'localhost',port: 3100,proxy: 'http://localhost:3000'},{reload: true})
  ]
}