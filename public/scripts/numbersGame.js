console.log('numbersGame is sourced');


 //doc ready
$(document).ready(function(){
  console.log('JQ is working');
  //initilaize player variables
  var playerOneInput = 0;
  var playerTwoInput = 0;
  var playerThreeInput = 0;
  var playerFourInput = 0;
  var maxNumberInput = 0;
  var playerGuesses={};

  $('#startButton').on('click', function(){
    //create gameSpace
    var gameForm="<form class='inputForm'><input type='text' id='playerOneIn' name='Player One: ' placeholder='What's your guess?'><input type='text' id='playerTwoIn' name='Player Two: ' placeholder='What's your guess?'><input type='text' id='playerThreeIn' name'Player Three: ' placeholder='What's your guess?'><input type='text' id='playerFourIn' name='Player Four: ' placeholder='What's your guess?'></form><button id='submitButton'> Submit your guesses?</button>";
    $(".gameSpace").hide().appendTo('.gameSpace').html(gameForm).fadeIn('slow');
    maxNumberInput=$('#maxNumIn').val();
  });// end Start button onClick

  $('body').on('click', '#submitButton', function(){
      console.log('in submitButton onClick');
      playerOneInput =$('#playerOneIn').val();
      console.log('player one', playerOneInput);
      playerTwoInput= $('#playerTwoIn').val();
      playerThreeInput=$('#playerThreeIn').val();
      playerFourInput=$('#playerFourIn').val();

    console.log('playerOne: ' + playerOneInput + ' player two: ' + playerTwoInput + ' player three: ' + playerThreeInput + ' player four: ' + playerFourInput);
    playerGuesses={
      playerOne: playerOneInput,
      playerTwo: playerTwoInput,
      playerThree: playerThreeInput,
      playerFour:playerFourInput,
      maxNumber: maxNumberInput
    }; //end playerGuesses
    console.log('Player guesses object:', playerGuesses);
  });// end submit button on click
// package players into object for AJAX
// Ajax call to server
 $.ajax({
       type: 'POST',
       url: "/results",
       data: playerGuesses,
       success: function(data){
         console.log('This is what the server sent: ' + data);
       }
       });//end AJAX call
});//end Doc ready
