$("#start").on("click", start); //start button event listener runs start function
$("#finish").on("click", finish); //finish button event listener runs finish function
//variables declared:
var timer = 35; //sets total time user has to answer questions
var correctAnswers = 0; //store correct answers so can be compared
var wrongAnswers = 0; //store wrong answers so can be compared
var counter; 
var audioElement = document.createElement('audio'); 
audioElement.setAttribute('src', '../TriviaGame/assets/jpdy.mp3'); //theme audio
var audioElement1 = document.createElement('audio'); 
audioElement1.setAttribute('src', '../TriviaGame/assets/applause.mp3'); //applause audio
var audioElement2 = document.createElement('audio'); 
audioElement2.setAttribute('src', '../TriviaGame/assets/boo.mp3');  //boo audio
//start function runs after user clicks the start button
function start() {
    audioElement1.pause(); //applause paused incase user immdeiately clicks start after last game
    audioElement2.pause(); //boo paused incase user immdeiately clicks start after last game
    audioElement.currentTime = 0; //theme song set to 0 so will start from begining evertime starbutton clicked
    audioElement.play(); //theme song starts
    counter = setInterval(decrease, 1000); //timer will decrease in increments of 1 sec
    $(".listOfQuestions").show(); //show user the list of questions that were hidden before the game started
    $("#timer").show(); //show user the timer that was hidden before game started
    $(".results").hide(); //hide results div from view
    $("#start").hide(); //hide start btn from view
}
//decrease function decreases time and displays on page
function decrease() {
    timer--; //user time starts decreasing because game has started
    $("#timer").html("Time Remaining: " + timer + " seconds"); //time displayed in html is user can see
    if (timer === 0) {
        finish(); //game ends (finish function called) when time left =  0 secs
    }
}
//finish function runs if time is up or user clicks finish btn 
function finish() { 
    clearInterval(counter); //counter cleared
    timer = 35; //timer reset to 35 secs 
    correctAnswers = 0; //correct answers reset to 0
    wrongAnswers = 0; //wrong answeres reset to 0
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
    if (correctAnswers < 4) { // if user score is < 4 boo else applaud for they have won
        audioElement2.play();
    } else {
        audioElement1.play();
    }
    // console.log("You got this many questions right " + correctAnswers);
    // console.log("You got this many questions right " + wrongAnswers);
    document.getElementById("correctNum").innerHTML = "Correct Answers: " + correctAnswers; // display total
    document.getElementById("incorrectNum").innerHTML = "Incorrect Answers: " + wrongAnswers; //display total
}