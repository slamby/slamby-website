export class CodeExample {
    bulk = {
        'Curl':
`Curl
    --header "Authorization: Slamby s3cr3t"
    https://europe.slamby.com/demo/api/status`,
        'Python':
`import slamby_sdk
from slamby_sdk.rest import ApiException

client = slamby_sdk.ApiClient("https://europe.slamby.com/demo/")
client.set_default_header("Authorization", "Slamby s3cr3t")

request = {
    "Text": "Macbook Pro 13 inch with retina display",
    "Count": "2",
    "UseEmphasizing": False,
    "NeedTagInResult": True
}

try:
    result = slamby_sdk.ClassifierServiceApi(client).recommend_service(id="SERVICE_ID",request=request)
    #print(result)
except ApiException as e:
    print(e)`,

'JavaScript':
`var SlambySdk = require('slamby-sdk');
// OR if you use from local
var SlambySdk = require('./path/to/src/index.js');

var client = new SlambySdk.ApiClient(); 
client.basePath = "http://<api_host>/";
client.defaultHeaders = {
    "Authorization": "Slamby <api_secret>"
};

var tagManager = new SlambySdk.TagApi(client);
tagManager.getTags({withDetails : false})
    .then(function(tags){
      // ...
    })
    .catch(handleError);
`,
'TypeScript':
`import { Injectable } from '@angular/core';
import { Http/*, Response*/ } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { DataSetApi, IDataSet } from 'slamby-sdk-angular2';

import { BaseService } from './base.service';
import { OptionService } from './option.service';

@Injectable()
export class DatasetService extends BaseService<DataSetApi> {
    constructor(private optionService: OptionService, private _http: Http) {
        super(new DataSetApi(_http,
        optionService.currentEndpoint.ApiBaseEndpoint), 
        optionService.currentEndpoint);
    }

    getDatasets(): Observable<IDataSet[]> {
        this.clearContentTypeHeader();
        return this.apiService.getDataSets();
    }
    ...
}`,
'PHP':
`require 'autoload.php';

use \Swagger\Client\Configuration;
use \Swagger\Client\ApiClient;
use \Swagger\Client\ApiException;
use \Swagger\Client\ObjectSerializer;
use \Swagger\Client\Api;
use \Swagger\Client\Model;

$config = new Configuration();
$config->setHost("http://<api_host>/");
$config->setSSLVerification(false);
$config->addDefaultHeader("Authorization", "Slamby <api_secret>");

$client = new ApiClient($config);

$dataSetManager = new Api\DataSetApi($client);
$dataSets = $dataSetManager->getDataSets();

$tagManager = new Api\TagApi($client);
$tags = $tagManager->getTags();
`,
'C#':
`...
using Slamby.SDK.Net.Managers;
using Slamby.SDK.Net;
using Slamby.SDK.Net.Models;

namespace DemoApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var configuration = new Configuration
            {
                ApiBaseEndpoint = new Uri("https://europe.slamby.com/demo/"),
                ApiSecret = "s3cr3t"
            };
            var manager = new DataSetManager(configuration);
            var response = manager.GetDataSetsAsync().GetAwaiter().GetResult();
            foreach (var item in response.ResponseObject)
            {
                Console.WriteLine(item.Name);
            }
            Console.ReadLine();
        }
    }
}`

    };
}
