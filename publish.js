var exec = require('child_process').exec;
var version = require('./package.json')['version'];

var cdnUrl = 'https://cdn.rawgit.com/slamby/slamby-website/' + version + '/dist/';

// Compile aot prod version with CDN base url.
exec('ng build --prod --aot --base-href ' + cdnUrl, {maxBuffer: 1024 * 500}, function(error, stdout, stderr) {
    require('simple-git')()
        .add('./*')
        .commit("Release commit version: " + version)
        .addTag(version)
        .push()
        .pushTags()
});