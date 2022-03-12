// TO DO:
// COUNTDOWN TIMER --
// START QUIZ BUTTON --
// DYNAMIC CREATION OF QUESTIONS --
// END QUIZ AFTER LAST QUESTION OR TIMER REACHES 0
// STORE SCORE AND NAME INPUT
// RETAKE QUIZ OR HIGH SCORE PAGE


var timerEl = document.getElementById('countdownTimer');
var startQuizBtnEl = document.querySelector('.startQuizBtn');
var questionTextEl = document.querySelector('.questionText');
var answerChoiceEl = document.querySelectorAll('.answerChoice');
var answerOneEl = document.getElementById('btn-0');
var answerTwoEl = document.getElementById('btn-1');
var answerThreeEl = document.getElementById('btn-2');
var answerBtnContainerEl = document.querySelector('.answerButtonContainer');
var number = 0;
var timeLeft = 40;
var finalScore = "";
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

// Question / Answer inputs
function nextQuestion() {
    if (number < 2){
        number++;
        questionTextEl.innerHTML = questions[number].question;
        answerOneEl.innerHTML = questions[number].answers.a
        answerTwoEl.innerHTML = questions[number].answers.b
        answerThreeEl.innerHTML = questions[number].answers.c
    } else if (number >=2 ){
        quizEnd();
    }
}

function startQuiz() {
    questionTextEl.innerHTML = questions[number].question;
    answerOneEl.innerHTML = questions[number].answers.a
    answerTwoEl.innerHTML = questions[number].answers.b
    answerThreeEl.innerHTML = questions[number].answers.c
}

// Timer countdown
function timerCountdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time left: " + timeLeft ;
            timeLeft--;
        } else if (timeLeft <= 0) {
            timerEl.textContent = "Out of time!";
            clearInterval(timeInterval);
            finalScore = timeLeft;
            quizEnd();
        }
    }, 1000)
    
};

function checkAnswer(el) {
    console.log(questions[number].correctAnswer)
    if(el.innerHTML == questions[number].correctAnswer) {
        console.log("FUNCTION IS WORKING");
    } else {
        timeLeft = timeLeft - 10;
        console.log("NOT CORRECT ANSWER");
    }
    nextQuestion();
}

function quizEnd() {
    questionTextEl.innerHTML = "Thanks for taking the quiz! Your score was " + timeLeft + "!";
    answerOneEl.remove();
    answerTwoEl.remove();
    answerThreeEl.remove();
}


// Start quiz button
startQuizBtnEl.addEventListener('click', function(){
        timerCountdown();
        startQuiz();
        startQuizBtnEl.remove();
    });

for  (iterator of answerChoiceEl) {
        (function(iterator){

            iterator.addEventListener('click', function() {
                checkAnswer(iterator);
            });
       })(iterator)
        
    }

