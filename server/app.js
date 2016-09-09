var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});
var randomNumber = require('../modules/randomNumber');
var players = [];
var maxNum = 0;
var getRandomNumber = 0;


app.listen('3000', 'localhost', function () {
  console.log("port 3000 is listening");
});//end server up


app.get('/', urlencodedParser, function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
  // res.send('meow');

});//end get

//anyone can use the public folder now
app.use(express.static('public'));

app.post( '/maxNumber', urlencodedParser, function ( req, res) {
  var maxNumIn = req.body.maxNum;
  console.log('maxNumIn is ', maxNumIn);
  getRandomNumber = randomNumber(0, maxNumIn ,true);
  console.log('getRandomNumber is' , getRandomNumber);
});
//set up a route/url to go to in order to access public
app.post( '/results', urlencodedParser, function ( req, res) {


  console.log('results hit');
console.log('req: ', req);

  var playerOne = req.body.playerOne;
  var playerTwo = req.body.playerTwo;
  var playerThree = req.body.playerThree;
  var playerFour = req.body.playerFour;
  



//console.log(playerOne);
  players = [playerOne,playerTwo,playerThree,playerFour];

  // players.push(playerOne);
  // players.push(playerTwo);
  // players.push(playerThree);
  // players.push(playerFour);

//console.log(players);
  //check each guess
  for (var i = 0; i < players.length; i++) {
    if (players[i] > getRandomNumber){
      players[i] = 'Too High';
    }else if(players[i] < getRandomNumber){
      players[i] = 'Too Low';
    }else if (players[i]==getRandomNumber){
        players[i] = 'THE WINNER';
    }
  }
  //make object to send
  var sendPlayas = {playerOne: players[0], playerTwo: players[1], playerThree: players[2], playerFour: players[3]};
  //send back object
  console.log(sendPlayas);
  console.log(getRandomNumber);
  res.send(sendPlayas);

});//end post
