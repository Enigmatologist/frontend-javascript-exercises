module.exports.addItem = function(add, arr){
  for (var i = 0; i < arr.length; i++){
    if(arr[i] === add){
      return arr;
    }
    else{
      arr.push(add);
    }
  }
  return arr;
};

module.exports.reverseSortedList = function(arr){
  return arr.sort().reverse();
};