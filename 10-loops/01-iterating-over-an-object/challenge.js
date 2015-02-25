module.exports.getKeys = function(myObject){
  var newArr = [];

  for(var property in myObject){
    newArr.push(property);
  }

  return newArr;
};

module.exports.getValues = function(myObject){
  var newArr = [];

  for(var property in myObject){
    newArr.push(myObject[property]);
  }

  return newArr;
};

module.exports.objectToArray = function(myObject){
  var newArr = [];

  for(var property in myObject){
    newArr.push(property + " is " + myObject[property]);
  }

  return newArr;
};