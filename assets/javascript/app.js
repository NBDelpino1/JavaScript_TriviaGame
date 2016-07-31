//event listeners added / stored into memory
$("#start").on("click", start);
$("#finish").on("click", finish);
//game variables declared 
var timer = 35; // user has 35 secs
var correctAnswers = 0; // correct answers 
var wrongAnswers = 0; // wrong answers
var counter; //clock
var audioElement = document.createElement('audio'); //audio 
audioElement.setAttribute('src', '../TriviaGame/assets/jpdy.mp3'); //audio file
// game starts when start btn is clicked by user
function start() {
    audioElement.currentTime = 0 //set audio to beginning of file
    audioElement.play(); //start audio
    counter = setInterval(decrease, 1000); //set timer to decrease by 1 sec
    $(".listOfQuestions").show(); //show list of questions that were initially hidden from view
    $("#timer").show(); //show timer that was initially hidden from view
    $(".results").hide(); //hide results div from view
    $("#start").hide(); //hide start btn from view
}

function decrease() {
    timer--; //user time starts decreasing because game has started
    $("#timer").html("Time Remaining: " + timer + " seconds"); //Time placed into HTML for user view
    if (timer === 0) {
        finish(); //game ends (finish function called) when time left =  0 secs
    }
}

function finish() { // if time runs out of user clicks finish btn game is over (finish function)
    clearInterval(counter); //clock reset
    timer = 35; //timer reset
    correctAnswers = 0; //correct answers reset
    wrongAnswers = 0; //wrong answeres reset
    audioElement.pause(); //audio paused
    $(".listOfQuestions").hide(); //hide list of questions from user
    $("#timer").hide(); //hide timer from user
    $(".results").show(); //inplace show user results
    $("#start").show(); //show start btn so user can start game again
    if ($("input[name = question1]:checked").val() == $("#questionOneCorrect").val()) {
        correctAnswers++; //compare user choice to my choice - if IS same - increase correct total// 
    } else {
        wrongAnswers++; //if user choice is NOT my choice - increase wrong answer total
    }
    if ($("input[name = question2]:checked").val() == $("#questionTwoCorrect").val()) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    if ($("input[name = question3]:checked").val() == $("#questionThreeCorrect").val()) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    if ($("input[name = question4]:checked").val() == $("#questionFourCorrect").val()) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    // console.log("You got this many questions right " + correctAnswers);
    // console.log("You got this many questions right " + wrongAnswers);
    document.getElementById("correctNum").innerHTML = "Correct Answers: " + correctAnswers; // display total
    document.getElementById("incorrectNum").innerHTML = "Incorrect Answers: " + wrongAnswers; //display total
}