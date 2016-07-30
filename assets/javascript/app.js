var timer = 10;
var correctAnswers = 0;
var wrongAnswers = 0;
var counter;


$("#start").on("click", start);
$("#finish").on("click", finish);

function start(){

	counter = setInterval(decrease, 1000);
	$(".listOfQuestions").show(); 
	$("#timer").show();
	$(".results").hide();
	$("#start").hide();
}

function decrease(){

	timer--;
	$("#timer").html("Time Remaining: " + timer + " seconds");
	if (timer === 0){
		alert("Time Up!");
		finish();
	}
}

function finish(){

	clearInterval(counter);
	timer = 10;
	correctAnswers = 0;
	wrongAnswers = 0;
	$(".listOfQuestions").hide();
	$("#timer").hide(); 
	$(".results").show();
	$("#start").show();

	if($("input[name = question1]:checked").val() == $("#questionOneCorrect").val()){
	correctAnswers ++;	
	} else {
		wrongAnswers ++;
	}

	if($("input[name = question2]:checked").val() == $("#questionTwoCorrect").val()){
	correctAnswers ++;	
	} else {
		wrongAnswers ++;
	}

	if($("input[name = question3]:checked").val() == $("#questionThreeCorrect").val()){
	correctAnswers ++;	
	} else {
		wrongAnswers ++;
	} 
	// console.log("You got this many questions right " + correctAnswers);
	// console.log("You got this many questions right " + wrongAnswers);
	document.getElementById("correctNum").innerHTML = "Correct Answers: " + correctAnswers;
	document.getElementById("incorrectNum").innerHTML = "Incorrect Answers: " + wrongAnswers;
} 

