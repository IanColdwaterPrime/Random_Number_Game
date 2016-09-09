console.log('numbersGame is sourced');

var playerGuesses={};

 //doc ready
$(document).ready(function(){
  console.log('JQ is working');
  //initilaize player variables
  var playerOneInput = 0;
  var playerTwoInput = 0;
  var playerThreeInput = 0;
  var playerFourInput = 0;
  var maxNumberInput = {};
  var guessCounter = 0;

  var playerResults = [];


  $('#startButton').on('click', function(){
    //create gameSpace
    var gameForm="<form class='inputForm'><input type='text' id='playerOneIn' name='Player One: ' placeholder='What number?'><input type='text' id='playerTwoIn' name='Player Two: ' placeholder='What number?'><input type='text' id='playerThreeIn' name'Player Three: ' placeholder='What number?'><input type='text' id='playerFourIn' name='Player Four: ' placeholder='What number?'></form><button id='submitButton'> Submit your guesses?</button>";
    $(".gameSpace").hide().appendTo('.gameSpace').html(gameForm).fadeIn('slow');
    maxNumberInput={maxNum: $('#maxNumIn').val()};
    $.ajax({
          type: 'POST',
          url: "/maxNumber",
          data: maxNumberInput,
          success: function(data){
            console.log(data);
          }
        });
  });// end Start button onClick

  $('body').on('click', '#submitButton', function(){
      guessCounter ++;

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
      // maxNumber: maxNumberInput
    }; //end playerGuesses
    console.log('Player guesses object:', playerGuesses);
    $.ajax({
          type: 'POST',
          url: "/results",
          data: playerGuesses,
          success: function(data){
            //console.log('This is what the server sent: ' + data.playerOne);


            playerResults=[data.playerOne,data.playerTwo,data.playerThree,data.playerFour];

            // playerResults.push(data.playerOne);
            // playerResults.push(data.playerTwo);
            // playerResults.push(data.playerThree);
            // playerResults.push(data.playerFour);
            console.log('player results:', playerResults);

            displayResults();

          }
        });// end Ajax call to server
  });// end submit button on click
// package players into object for AJAX



var displayResults = function () {
  $('.resultsSpace').empty();

  for (var i = 0; i < playerResults.length; i++) {
    if(playerResults[i] === "THE WINNER"){
      $('.winner').show();
    }else{

      $('.resultsSpace').append('<h3>Player One:</h3><p> You guessed: '+playerGuesses.playerOne+ '</p> <p> You were ' +playerResults[0]+'</p>');
      $('.resultsSpace').append('<h3>Player Two:</h3><p> You guessed: '+playerGuesses.playerTwo+ '</p> <p>You were ' +playerResults[1]+'</p>');
      $('.resultsSpace').append('<h3>Player Three:</h3><p> You guessed: '+playerGuesses.playerThree+ '</p> <p>You were '+ playerResults[2]+'</p>');
      $('.resultsSpace').append('<h3>Player Four:</h3><p> You guessed: '+playerGuesses.playerFour+ '</p> <p>You were ' +playerResults[3]+'</p>');
      $('.resultsSpace').append($('<button />',{
        class: 'reset',
        text: 'Reset Game',

      }));
      $('.resultsSpace').append('<h4>Number of Guesses: ' + guessCounter + '</h4>');
    }
  }
};//displayResults

//reset onClick
$('body').on('click', ".reset", function(){
  //test handshake
  console.log('in reset on Click');
  $('.resultsSpace').empty();
  $('.inputForm').empty();
  $('#submitButton').hide();

  guessCounter = 0;
});//end reset on click

});//end Doc ready
