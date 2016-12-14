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
  entry: 'tmp/app/main.ts',
  format: 'iife',
  dest: 'build/bundle.es2015.js',
  plugins: [
    angular({
      preprocessors: {
        template: template => pug.render(template),
        style: scss => {
            const css = sass.renderSync({ data: scss }).css;
            return cssmin.minify(css).styles;
        }
      }
    }),
    typescript(),
    alias({ rxjs: __dirname + '/node_modules/rxjs-es' }), // rxjs fix (npm install rxjs-es) 
    nodeResolve({ jsnext: true, main: true })
  ]
}