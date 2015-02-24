module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
    var newObj = {
      title: courseTitle,
      duration: courseDuration,
      students: courseStudents
    };

    return newObj;
};

module.exports.addProperty = function(object, newProp, newValue){
  if(!object.hasOwnProperty(newProp)){
    object[newProp] = newValue;
  }

  return object;
};

module.exports.formLetter = function(object){
  return "Hello " + object.recipient + ",\n\n" + object.msg + "\n\n" + "Sincerely,\n" + object.sender;
};

module.exports.canIGet = function(item, money){
  var itemList = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };
return money >= itemList[item];
};