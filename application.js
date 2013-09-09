
var target = Math.round(Math.random() * 100);
var numGuesses = 0;
var guess = 0;
var difference = 0;
console.log(target);

$(document).ready(function() {
    console.log(target);
    $('#button').on('click', function(){
        guess = $('#guess').val();
        
        if( numGuesses == 0 ){
            firstGuess();
        } else { 
            guessAction();
        }
        numGuesses++;
    });
  
});

function firstGuess(){
    difference = Math.abs(guess-target);
    $('#header').html('');
    if( guess == target ){
        win();
    } else {
       $('#story').html('Not Quite. Guess Again'); 
    }
};

function guessAction(){
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

function win(){
    $('#story').html('You Win!!!');
    $('#guess').attr('type','submit');
    $('#guess').attr('value','New Game');
    $('#button').remove();
}