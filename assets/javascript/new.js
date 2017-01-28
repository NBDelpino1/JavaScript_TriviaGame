$('#start').on('click', function() {
    $('#start').remove() // make button disappear
    game.loadQuestion();
});
$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
});
$(document).on('click', '#reset', function() {
    game.reset();
});
// Array of questions
var questions = [{
    question: "Which rockstar was Jennifer Lawrence rumored to have been dating this year?",
    answers: ["Adam Levine", "Chris Martin", "Fabrizio Moretti", "Pharrell"],
    correctAnswer: "Chris Martin",
    image: ""
}, {
    question: "Which island nation is popstar Rihanna from?",
    answers: ["Aruba", "Jamaica", "Bahamas", "Barbados"],
    correctAnswer: "Barbados",
    image: ""
}, {
    question: "What's Natalie Portman's actual last name?",
    answers: ["Hershing", "Horowitz", "Hershlag", "Douglas"],
    correctAnswer: "Hershlag",
    image: ""
}, {
    question: "Which One Direction member is Ed Sheeran's 'Don't' reportedly about?",
    answers: ["Harry Styles", "Zayn Malik", "Niall Horan", "Niall Horan"],
    correctAnswer: "Niall Horan",
    image: ""
}, {
    question: "Who was the first person to have a No. 1 album and a No. 1 film in the same week?",
    answers: ["Beyonce", "Jennifer Hudson", "Justin Timberlake", "Jennifer Lopez"],
    correctAnswer: "Jennifer Lopez",
    image: ""
}, {
    question: "Which NBA star did actor Gabrielle Union marry?",
    answers: ["LeBron James", "Blake Griffin", "Dwyane Wade", "Kobe Bryant"],
    correctAnswer: "Jennifer Lopez",
    image: ""
}, {
    question: "Meryl Streep, Shaquille O'Neal, and Whitney Houston are all from which state?",
    answers: ["New Jersey", "California", "Indiana", "New York"],
    correctAnswer: "New Jersey",
    image: ""
}, {
    question: "OK, you know that Katy Perry is a California girl. But do you know WHICH city she's from?",
    answers: ["Santa Cruz", "Santa Barbara", "Indiana", "Los Angeles"],
    correctAnswer: "Santa Barbara",
    image: ""
}, {
    question: "Who's the youngest Kardashian?",
    answers: ["Kendall", "Kylie", "Khloe", "Rob"],
    correctAnswer: "Rob",
    image: ""
}, {
    question: "Which one of these beautiful ladies Leonardo Dicaprio HASN'T dated?",
    answers: ["Miranda Kerr", "Bar Refaeli", "Blake Lively", "Erin Heatherton"],
    correctAnswer: "Miranda Kerr",
    image: ""
}];
// Game object containing properties: questions
var game = {
    questions: questions,
    currentQuestion: 0, // keep track of what question on
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function() { // incharge of decreasing timer
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("TIME UP!");
            game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').append('<h5>' + questions[game.currentQuestion].question + '</h5>');
        $('#subwrapper').html("<h5>Time Remaining <span id='counter'>30</span> Seconds</h5>");
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append(' <button class="waves-effect waves-light btn answer-button"    id="button-' + i + '        "     data-name="      ' +      questions[game.currentQuestion].answers[i] +        '      "       > '             +    questions[game.currentQuestion].answers[i]    +     '<i class="material-icons left">cloud</i></button>');
        }
    },
    nextQuestion: function() {
        game.counter - 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h5>Out of time</h5>");
        $("#subwrapper").append('<h5>The correct answer was:' + questions[game.currentQuestion].correctAnswer + '</h5>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(timer);
        $('#subwrapper').html("<h5>ALL DONE</h5>");
        $('#subwrapper').append("<h5>Correct: " + game.correct + "</h5>");
        $('#subwrapper').append("<h5>Incorrect: " + game.incorrect + "</h5>");
        $('#subwrapper').append('<h5>Unanswered: ' + game.unanswered + "</h5>");
        $('#subwrapper').append("<button id='reset'>RESET</button> ");
    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function() {
        console.log("YOU GOT IT");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h5>YOU GOT IT</h5>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function() {
        console.log("WRONG");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h5>WRONG</h5>');
        $("#subwrapper").append('<h5>The correct answer was:' + questions[game.currentQuestion].correctAnswer + '</h5>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function() {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
}


