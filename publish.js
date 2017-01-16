var exec = require('child_process').exec;
var version = require('./package.json')['version'];
var fs = require('fs');

// Set CDN Url to use for compilaiton.
var cdnUrl = 'https://cdn.rawgit.com/slamby/slamby-website/' + version + '/dist';

// Set SASS CDN url
function setSassCDNUrl(useCDN=true){
    var content = "// Automatically generated text from publish.js. Do not modify it.\r\n";

    if(useCDN){
        content = content.concat('$publicPath: "'+cdnUrl+'";');
    } else {
        content = content.concat('$publicPath: "";');
    }

    fs.writeFile("src/assets/scss/baseUrl.scss", content, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

//Change index.html scr + href to CDN compatible
function setIndexCDN(){
    var fileName = __dirname + '/dist/index.html';
    fs.readFile(fileName, 'utf8', function(err, html) {
        var content = html;
        content = content.replace(/(?:src)=([^'])(?!http|https)(?:(.*?))(js|css|ico|png).*?/g, 'src="'+cdnUrl+'/$2$3');
        content = content.replace(/(?:href)=([^'])(?!http|https)(?:(.*?))(js|css|ico|png).*?/g, 'href="'+cdnUrl+'/$2$3'); //todo make it nicer with regexp.
        fs.writeFile(fileName, content, function(err) {
            if(err) {
                return console.log(err);
            }
        });
    });
}

// Set CDN Sass URL for compile
setSassCDNUrl();

// Compile aot prod version with CDN base url.
exec('ng build --prod --aot', {maxBuffer: 1024 * 500}, function(error, stdout, stderr) {

    if(error) {
        console.log(err);
    } else {
        console.log('Version: ' + version + ' production build done.')
        // Modify index.html to be CDN compatible;
        setIndexCDN();
        
        // GIT, commit, push, create tag, push tag.
        require('simple-git')()
            .add('./*')
            .commit("Release commit version: " + version)
            .addTag(version)
            .push()
            .pushTags()
    }

    // set back cdn for development mode.
    setSassCDNUrl(false);
});