// rollup.config.js 
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import pug from 'pug';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier';
 
const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

export default {
  entry: 'tmp/app/main.aot.ts',
  format: 'iife',
  dest: 'build/bundle.es2015.js',
  plugins: [
    angular(),
    typescript(),
    alias({ rxjs: __dirname + '/node_modules/rxjs-es' }), // rxjs fix (npm install rxjs-es) 
    nodeResolve({ jsnext: true, main: true })
  ]
}