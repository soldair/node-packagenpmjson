
[![Build Status](https://secure.travis-ci.org/soldair/node-packagenpmjson.png)](http://travis-ci.org/soldair/node-packagenpmjson)

packagenpmjson
==============

you know the json that the npm registry returns when you curl your package info?

this creates a npm compatable json document. you can use it as a component for private npm registries that doont use couch.


```js
var packagenpmjson = require('packagenpmjson');


packagenpmjson([npm registry url],[path to package root],[path to tar produced by npm pack],function(err, json){
  console.log(json);
  
});

```

the console.log of the json will look something like this.

```js
{
   "maintainers" : [
      "Ryan Day"
   ],
   "readme" : "\n[![Build Status](https://secur.....",
   "_id" : "packagenpmjson",
   "name" : "packagenpmjson",
   "dist-tags" : {
      "latest" : "0.0.0"
   },
   "author" : "Ryan Day",
   "description" : "",
   "versions" : {
      "0.0.0" : {
         "repository" : {
            "url" : "git://github.com/soldair/node-shafile.git",
            "type" : "git"
         },
         "readme" : "\n[![Build Status](https://secur.....",
         "_id" : "packagenpmjson@0.0.0",
         "version" : "0.0.0",
         "dependencies" : {
            "packagegitconfig" : "0.0.0",
            "packagereadme" : "0.0.0",
            "shafile" : "0.0.0"
         },
         "name" : "packagenpmjson",
         "dist" : {
            "shasum" : "6577489ca888fe35c23c88767e5c7f378ece11e9",
            "tarball" : "https://fake-npmjs.org/packagenpmjson/-/packagenpmjson-0.0.0.tgz"
         },
         "author" : "Ryan Day",
         "license" : "MIT",
         "description" : "async sha file using built in crypto.",
         "main" : "index.js",
         "keywords" : [
            "npm",
            "json",
            "publish",
            "private"
         ],
         "readmeFilename" : "README.md",
         "devDependencies" : {
            "tape" : "~0.3.3"
         },
         "scripts" : {
            "test" : "node test/test.js"
         }
      }
   },
   "times" : {
      "0.0.0" : "2013-04-29T17:28:23.904Z"
   }
}


```


