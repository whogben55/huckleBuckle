
var target = Math.round(Math.random() * 100);
var numGuesses = 0;
var guess = 0;
var difference = 0;

$(document).ready(function() {
    $('#guess').keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $('#button').click();
        }
    })
                      
    $('#button').on('click', function(){
        guess = $('#guess').val();
        if( !isNumeric(guess) || guess > 100 || guess < 0){
             $('#story').html('Thats Not a Valid </br> Number Silly'); 
        }
        else if( numGuesses == 0){
            firstGuess();
        } else { 
            $('#pic').html('<img src="" width="600" alt="hot or cold"/>');
            guessAction();
        }
    });
  
});

// action for the first guess
function firstGuess(){
    numGuesses++;
    difference = Math.abs(guess-target);
    $('#header').html('');
    if( guess == target ){
        win();
    } else {
       $('#story').html('Not Quite. Guess Again'); 
    }
};

// action for the rest of the guesses
function guessAction(){
    numGuesses++;
    console.log(guess);
    var newDif = Math.abs(guess-target);
    if( guess == target ){
        win();
    } else if (newDif < difference){
        warmer();
    } else {
        colder();
    }
    difference = newDif;
}

//funciton when guess is closer
function warmer(){
   
    $('#game').removeClass('box');
     $('#game').removeAttr('style');
    $('#story').html('Getting Warmer');
    $("#pic").fadeOut(0, function(){
        $(this).find("img").attr("src", "sun.jpeg");
        $(this).find("img").attr("width", "600");
        $(this).removeClass('ice');
        $(this).fadeIn(200);
    });
    
}

// function for when guess is farther away
function colder(){
    $("#pic").fadeOut(0, function(){
        $(this).addClass('ice');
        $(this).find("img").attr("src", "icicle.png");
        $(this).find("img").attr("width", "280");
        $(this).fadeIn(200);
    });
    $('#game').addClass('box');
    $('.box').css('background-color','rgb(24,131,205)');
    $('#story').html('Getting Colder');
}

//function for correct guess
function win(){
    $('#game').removeClass('box');
    $('#game').removeAttr('style');
    $("#pic").fadeOut(0, function(){
        $(this).find("img").attr("src", "sun.jpeg");
        $(this).find("img").attr("width", "600");
        $(this).removeClass('ice');
        $(this).fadeIn(200);
    });
    $('#story').html('You Win!!! <br/>' + numGuesses + ' Guesses');
    $('#guess').attr('type','submit');
    $('#guess').attr('value','New Game');
    $('#button').remove();
}

//check if is a number
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}