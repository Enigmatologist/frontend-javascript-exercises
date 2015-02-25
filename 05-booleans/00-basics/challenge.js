module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
  var tenToTwenty = number < 10 || number > 20;
  var btwn42and75 = number <= 42 || number > 75;
  var btwn1and6 = number <= 1 || number >= 6;

  return tenToTwenty && btwn42and75 && btwn1and6;

};

module.exports.nameAndPrice = function(name, price) {
  var nyTimes = name === "NYTimes";
  var laTimes = name === "LATimes";

  return (nyTimes || laTimes) && price >= 1;
};