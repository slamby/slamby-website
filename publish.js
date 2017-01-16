var exec = require('child_process').exec;
var version = require('./package.json')['version'];
var fs = require('fs');

var cdnUrl = 'https://cdn.rawgit.com/slamby/slamby-website/' + version + '/dist';

// Set SASS CDN url
function setSassCDNUrl(cdn=true){
    var content = "// Automatically generated text from publish.js. Do not modify it.\r\n";

    if(cdn){
        content = content.concat('$publicPath: "'+cdnUrl+'";');
    }

    fs.writeFile("src/assets/scss/baseUrl.scss", content, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

// Set CDN Sass URL for compile
setSassCDNUrl();

// Compile aot prod version with CDN base url.
exec('ng build --prod --aot', {maxBuffer: 1024 * 500}, function(error, stdout, stderr) {
    require('simple-git')()
        .add('./*')
        .commit("Release commit version: " + version)
        .addTag(version)
        .push()
        .pushTags()
});

setSassCDNUrl(false) // set back cdn for development mode.