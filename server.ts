/// <reference path="./typings/index.d.ts" />

var path = require('path');
import * as glob from 'glob';
var express = require('express');
var connect = require('connect');
var http = require('http');
var config = require('config');
var slambySdk = require('slamby-sdk');

//Cache manager
var NodeCache = require( "node-cache" );

const isDeveloping: boolean = process.env.NODE_ENV !== 'production';
const port: number = isDeveloping ? 3000 : 3000;
const app = express();

//gzip enabled
app.use(connect.compress());
//Cache enabled
app.set('view cache', true);

//Static folders
app.use('/build', express.static(__dirname + '/build'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

const myCache = new NodeCache( { stdTTL: 600, checkperiod: 600 } );

function getJobs(){
    http.get(config.get("cms.jobService"), function(res){
        var body:string = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            myCache.set( "jobs", body, function( err, success ){
                if( !err && success ){
                    console.log( success );
                }
            });
        });
    }).on('error', function(e){
        console.log("Got an error: ", e);
    });
};

myCache.on( "expired", function( key, value ){
    console.log(key + " expired");
    getJobs();   
});

app.get('/api/jobservice', function (req,response){
    myCache.get( "jobs", function( err, value ){
        if( !err ){
            if(value == undefined){
              console.log("undifined");
              response.status(404).send("Job List Not Available");
            }else{
                response.send(value);
            }
        }
    });
});

app.get('/api/jobservice/:id*', function(req, response) {
    var id = req.params.id;
    var result = false;
    myCache.get( "jobs", function( err, value ){
        if( !err ){
            var object = JSON.parse(value);
            object.forEach(element => {
                if(element.id == id){
                    result = true;
                    response.send(JSON.stringify(element));
                };
            });
        }
    });
    if(!result){
        response.status(404).send('{"error":"Job Not Found"}');
    }
});

function AddDocument(document:Object) {
    var client = new slambySdk.ApiClient(); 
    client.basePath = "https://europe.slamby.com/quinjet/";
    client.defaultHeaders = {
        "Authorization": "Slamby s3cr3t"
    };
    var apiInstance = new slambySdk.DocumentApi();
    
    var opts = { 
    'document': new slambySdk.ModelObject() // ModelObject | 
    };

    apiInstance.createDocument(opts).then(function() {
    console.log('API called successfully.');
    }, function(error) {
    console.error(error);
    });
};

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

getJobs();
