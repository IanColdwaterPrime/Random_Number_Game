//random Number module


var randomNumber= function(min, max, integer){
  //get random Number between min max
  var rando = Math.random()*(max - min)+min;
  if(integer){
    rando = Math.floor(rando);
  }
  return rando;
};
module.exports=randomNumber;
