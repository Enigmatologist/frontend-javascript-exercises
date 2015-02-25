module.exports.sumNumbers = function(arr){
  if(arr.length == 0){
    return 0;
  }
  var sum = 0;

  for (var i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
  var lower = inputString.toLowerCase();
  var split = lower.split(',');

  return split;
};

module.exports.addIndex = function(arr){
  var newArr = [];

  for(var i = 0; i < arr.length; i++){
    newArr.push(i + " is " + arr[i]);
  }

  return newArr;
};
