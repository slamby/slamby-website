var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var NODE_ENV  = process.env.NODE_ENV || 'development';
var pkg = require('./package.json');

// Polyfill
Object.assign = require('object-assign');

// Node
var path = require('path');

// NPM
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Webpack Plugins
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var DedupePlugin   = webpack.optimize.DedupePlugin;
var DefinePlugin   = webpack.DefinePlugin;
var BannerPlugin   = webpack.BannerPlugin;

/*
 * Config
 */
module.exports = {
  devtool: 'source-map',
  debug: false,
  cache: true,
  context: __dirname,
  stats: {
    chunks: false,
    colors: true,
    reasons: true
  },

  // our Development Server config
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: '/src',
    publicPath: '/src/build'
  },

  //
  entry: {
    'bundle': [
      'es6-shim',
      'rxjs',
      'zone.js',
      'reflect-metadata',
      '@angular/core',
      './src/main'
    ],
  },

  // Config for our build files
  output: {
    path: path.join(__dirname, '/src/build/'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
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
          loader: 'ts',
          exclude: [/node_modules/]
      },
      
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

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
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/
    ]
  },

  // Or array of paths
  sassResources: [
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss'
  ],

  ts: {
    silent: true
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/assets")]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'VERSION': JSON.stringify(pkg.version)
    }),
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new CommonsChunkPlugin('bundle','bundle.js',Infinity),
    new CommonsChunkPlugin('common','common.js'),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3100,
      proxy: 'http://localhost:3000'
    },
    {
      reload: true
    })
  ],

  /*
   * When using `templateUrl` and `styleUrls` please use `__filename`
   * rather than `module.id` for `moduleId` in `@View`
   */
  node: {
    crypto: false,
    __filename: true
  }
};