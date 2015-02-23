module.exports.reversePlusOne = function(arr){
  arr.reverse();
  arr.unshift(1);

  return arr;
};

module.exports.plusesEverywhere = function(arr){
  for (var i = arr.length-1; i > 0; i--){
    arr.splice(i, 0, "+");
  }

  return arr.join("");
};

module.exports.arrayQuantityPlusOne = function(arr){
  var arrLength = arr.length;

  return arrLength + 1;
};