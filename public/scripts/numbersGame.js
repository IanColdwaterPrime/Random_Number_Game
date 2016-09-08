console.log('numbersGame is sourced');
//initilaize player variables
 var playerOneInput;
 var playerTwoInput;
 var PlayerThreeInput;
 var playerFourInput;
 var maxNumberInput;

 //doc ready
$(document).ready(function(){
  console.log('JQ is working');

  $('#startButton').on('click', function(){
    //create gameSpace
    var gameForm="<form class='inputForm'><input type='text' id='playerOneIn name='Player One:' placeholder='What's your guess?'><input type='text' id='playerTwoIn name='Player Two:' placeholder='What's your guess?'><input type='text' id='playerThreeIn name'Player Three:' placeholder='What's your guess?'><input type='text' id='playerFourIn name'Player Four:' placeholder='What's your guess?'><button id='submitButton'> Submit your guesses?</button>";
    $(".gameSpace").hide().html(gameForm).fadeIn('slow');

  });// end Start button onClick




//package players into object for AJAX
var playerGuesses={
  playerOne: playerOneInput,
  playerTwo: playerTwoInput,
  playerThree: playerThreeInput,
  playerFour:playerFourInput,
  maxNumber: maxNumberInout
};// end playerGuesses
console.log(playerGuesses);
//Ajax call to server
$.ajax({
      type: 'POST',
      url: "/results",
      data: playerGuesses,
      success: function(data){
        console.log('This is what the server sent: ' + data);
      }
      });//end AJAX call
});//end Doc ready
