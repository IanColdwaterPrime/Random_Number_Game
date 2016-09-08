var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});

var randomNumber;
var players = [];


app.listen('3000', 'localhost', function () {
  console.log("port 3000 is listening");
});//end server up


app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
  res.send('meow');

});//end get

//anyone can use the public folder now
app.use(express.static('public'));

//set up a route/url to go to in order to access public
app.post( '/results', urlencodedParser, function ( req, res) {
  console.log('results hit');

  var playerOne = req.body.playerOne;
  var playerTwo = req.body.playerTwo;
  var playerThree = req.body.playerThree;
  var playerFour = req.body.playerFour;

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
  var sendPlayas = {playerOne: players[0], playerTwo: players[1], playerThree: players[2], playerFour: players[3]};
  //send back object
  res.send(sendPlayas);
});//end post

var getRandomNumber = function () {
  //use Module
  //randomNumber =
};
