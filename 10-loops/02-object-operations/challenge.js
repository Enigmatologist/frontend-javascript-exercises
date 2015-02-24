module.exports.copy = function(myObject){
  var newObj = {};

  for(var property in myObject){
    newObj[property] = myObject[property];
  }

  return newObj;
};

module.exports.extend = function(dest, src){
  for(var property in src){
    dest[property] = src[property];
  }

  return dest;
};

module.exports.hasElems = function(obj, arr){
  var result = true;
  arr.forEach(function(val){
    if(!obj.hasOwnProperty(val)){
      result = false;
    }
  });
  return result;
};