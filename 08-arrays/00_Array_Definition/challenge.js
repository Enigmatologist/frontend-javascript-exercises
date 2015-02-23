module.exports.newArray = function(a,b,c,d){
  var arr = [a,b,c,d];
  return arr;
};

module.exports.firstAndLast = function(arr){
  var newArr = [];
  var first = arr[0];
  var last = arr[arr.length-1];
  newArr.push(first,last);

  return newArr;
};