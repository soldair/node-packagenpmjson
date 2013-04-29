
var shafile = require('shafile');
var readme = require('packagereadme');
var gitconfig = require('packagegitconfig');
var path = require('path');

module.exports = function(registry,root,tar,cb){

  try{
    var packagejson = require(path.join(root,'package.json'));
  } catch (e){
    return process.nextTick(function(){
      cb(e);
    });
  }

  var c = 3
  , errors = []
  , done = function(err){
    if(err) errors.push(err);
    c--;
    if(c) return;

    cb(errors.length?errors:false,obj);
  }
  ,obj = {
    _id:packagejson.name,
    name:packagejson.name,
    description:packagejson.description,
    author:packagejson.author,
    maintainers:[
      packagejson.author
    ],
    times:{},
    'dist-tags':{
      latest:packagejson.version
    },
    versions:{}
  }
  ,versionObj = _ext({},packagejson)
  ;

  

  obj.times[packagejson.version] = (new Date()).toJSON();
  obj.versions[packagejson.version] = versionObj;
  versionObj._id = packagejson.name+'@'+packagejson.version;

  readme(root,function(err,data){

    obj.readme = data||'no readme found.';
    versionObj.readme = data||'no readme found.';
    done();
  });

  gitconfig(root,function(err,data){
    if(data && data.remote && data.remote.origin) {
      versionObj.respository = {
        url:data.remote.origin.url,
        github:data.github,
        git:true
      };
    }
    done();
  });

  shafile(tar,function(err,sha){
    if(err) return done(err);
    versionObj.dist = {
      shasum:sha,
      tarball:registry+'/'+packagejson.name+'/-/'+path.basename(tar)
    };
    done();  
  });
};

function _ext(o,o2){
  o = o||{};
  Object.keys(o2||{}).forEach(function(k){
    o[k] = o2[k];
  });
  return o;
}
