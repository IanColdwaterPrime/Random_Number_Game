//random Number module
var randomNumber= function(min, max, interger){
  //get random Number between min max
  var rando = Math.random()*(max - min)+min;
  if(interger){
    rando = Math.floor(rando);
  }
  return rando;
};
module.exports=randomNumber;
