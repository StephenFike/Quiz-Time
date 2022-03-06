// TO DO:
// COUNTDOWN TIMER --
// START QUIZ BUTTON
// DYNAMIC CREATION OF QUESTIONS
// END QUIZ AFTER LAST QUESTION OR TIMER REACHES 0
// STORE SCORE AND NAME INPUT
// RETAKE QUIZ OR HIGH SCORE PAGE


var timerEl = document.getElementById('countdownTimer');
var startQuizBtnEl = document.querySelector('.startQuizBtn');
var answerBtnEl = document.querySelector('.answerChoice');
var questionTextEl = document.querySelector('.questionText');
var answerChoiceEl = document.querySelector('.answerChoice');
var answerBtnContainerEl = document.querySelector('.answerButtonContainer')
var number = 0;
var submitButtonClicked = false;
var questions = [
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Centralized Serial Selector",
            c: "Code Selection Style"
        },
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of these is a Javascript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "npm"
    },
    {
        question: "Which of the following is the correct way to select a class with JQuery?",
        answers: {
            a: "$(#xxxx)",
            b: "($.xxxx)",
            c: "$(.xxxx)",
        },
        correctAnswer: "$(.xxxx)"
    }
];


function nextQuestion() {
    questionTextEl.innerHTML = questions[number].question;
    number++;
}

// Timer countdown
function timerCountdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = "Time left: " + timeLeft ;
            timeLeft--;
        } else if (timeLeft == 0) {
            timerEl.textContent = "Out of time!";
            clearInterval(timeInterval);
        }
    }, 1000)
};


// Submit button creation
// var submitButtonEl = document.createElement("button")
// submitButtonEl.setAttribute("class", "startQuizBtn rounded p-1 m-1")
// submitButtonEl.innerHTML = "Submit";
// answerBtnContainerEl.append(submitButtonEl);


// submitButtonEl.addEventListener('click', function(){
//     nextQuestion();
// })

startQuizBtnEl.addEventListener('click', function(){
    if(submitButtonClicked == false) {
        timerCountdown();
        nextQuestion();
        submitButtonClicked == true;
        startQuizBtnEl.innerHTML = 'Submit';
    } else {
        nextQuestion();
    }
});
