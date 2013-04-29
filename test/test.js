var packagenpmjson = require('../index');
var test = require('tape');
var path = require('path');

test("can generate npm json for package",function(t){
 packagenpmjson('https://fake-npmjs.org',path.resolve(__dirname,".."),__filename,function(err,json){

    t.ok(!err,'should not have error making npm json'); 
    t.ok(json,'should have data');

    var versions =  Object.keys(json.versions);

    t.ok(json.versions[versions[0]].dist.shasum,'version dists should have shasum');
    t.ok(json.versions[versions[0]].readme.length,'should have readme');
    t.end();
  });
});
