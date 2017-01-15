var exec = require('child_process').exec;
var version = require('./package.json')['version'];

// Compile aot prod version with CDN base url.
// exec('ng build --prod --aot --base-href https://cdn.rawgit.com/slamby/slamby-website/' + version + '/', {maxBuffer: 1024 * 500}, function(error, stdout, stderr) {
//     console.log(error);
// });

require('simple-git')()
    .add('./*')
    .addTag(version)
    .commit("Release commit version: " + version)
    .push()
    .pushTags()