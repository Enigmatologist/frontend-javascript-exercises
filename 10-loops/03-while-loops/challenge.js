module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){
    actionFn();
  }
};

module.exports.sumNumbers = function(arr){
  var sum = 0;
  var count = 0;
  while(count < arr.length){
    sum += arr[count];
    count++;
  }

  return sum;
};

