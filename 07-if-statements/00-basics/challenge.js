module.exports.favoriteNumber = function(fav, guess){
  if(guess == fav){
    return "You got it!";
  }
  else if(guess > fav){
    return "Too high";
  }
  else{
    return "Too low";
  }
};

module.exports.checkLock = function(a,b,c,d){
  if((a == 3 || a == 5) || a == 7){
    if(b == 2){
      if(c >= 5 && c <= 100){
        if(d < 9 || d > 20){
          return "correct";
        }
        else{
          return "incorrect";
        }
      }
      else {
        return "incorrect";
      }
    }
    else{
      return "incorrect";
    }
  }
  else{
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money){
  if(item === "MacBook Air" && money >= 999){
    return true;
  }
  else if(item === "MacBook Pro" && money >= 1299){
    return true;
  }
  else if(item === "Mac Pro" && money >= 2499){
    return true;
  }
  else if(item === "Apple Sticker" && money >= 1){
    return true;
  }
  else{
    return false;
  }
};