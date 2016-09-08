

var randomNumber = 80;
var players = [];

req = {playerOne: 40, playerTwo: 80, playerThree: 20, playerFour: 90};


//set up a route/url to go to in order to access public
function meow ( req) {
  console.log('results hit');

  var playerOne = req.playerOne;
  var playerTwo = req.playerTwo;
  var playerThree = req.playerThree;
  var playerFour = req.playerFour;

  players.push(playerOne);
  players.push(playerTwo);
  players.push(playerThree);
  players.push(playerFour);

  //check each guess
  for (var i = 0; i < players.length; i++) {
    if (players[i] > randomNumber){
      players[i] = 'tooHigh';
    }else if(players[i] < randomNumber){
      players[i] = 'tooLow';
    }else {
      players[i] = 'winner';
    }
  }
  //make object to send
  var sendPlayas = {playerOne: players[0], playerTwo: players[1], playerThree: players[2], playerFour: players[3]}
  //send back object
 console.log(sendPlayas);
}//end post

meow(req);
