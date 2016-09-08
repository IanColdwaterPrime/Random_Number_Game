console.log('numbersGame is sourced');
//initilaize player variables
 var playerOneInput = 0;
 var playerTwoInput= 0;
 var playerThreeInput= 0;
 var playerFourInput= 0;
 var maxNumberInput= 0;

 //doc ready
$(document).ready(function(){
  console.log('JQ is working');

  $('#startButton').on('click', function(){
    //create gameSpace
    var gameForm="<form class='inputForm'><input type='text' id='playerOneIn name='Player One:' placeholder='What's your guess?'><input type='text' id='playerTwoIn name='Player Two:' placeholder='What's your guess?'><input type='text' id='playerThreeIn name'Player Three:' placeholder='What's your guess?'><input type='text' id='playerFourIn name'Player Four:' placeholder='What's your guess?'></form><button id='submitButton'> Submit your guesses?</button>";
    $(".gameSpace").hide().appendTo('.gameSpace').html(gameForm).fadeIn('slow');
  });// end Start button onClick

//package players into object for AJAX
var playerGuesses={
  playerOne: playerOneInput,
  playerTwo: playerTwoInput,
  playerThree: playerThreeInput,
  playerFour:playerFourInput,
  maxNumber: maxNumberInput
};// end playerGuesses
// console.log(playerGuesses);
//Ajax call to server
// $.ajax({
//       type: 'POST',
//       url: "/results",
//       data: playerGuesses,
//       success: function(data){
//         console.log('This is what the server sent: ' + data);
//       }
//       });//end AJAX call
});//end Doc ready
  //submit button onClick
$('#gameSpace').on('click', '#submitButton', function(){
    playerOneInput =$('#playerOneIn').val();
    playerTwoInput=$('#playerOneIn').val();
    playerThreeInput=$('#playerOneIn').val();
    playerFourInput=$('#playerOneIn').val();
  console.log(playerOneInput+playerTwoInput+playerThreeInput+playerFourInput);
    });
