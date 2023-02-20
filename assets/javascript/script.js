let questions = [
    {
        "question": 'When did Napoleon Bonaparte become the Emperor of France.?',
        "option1": '1705',
        "option2": '1804',
        "option3": '1920',
        "option4": '1815',
        "answer": "2"
    },
    {
        "question": 'What year did Napoleon Bonaparte invade Russia?',
        "option1": '1709',
        "option2": '1812',
        "option3": '1922',
        "option4": '1821',
        "answer": "2"
    },
    {
        "question": 'Where was Napoleon exiled to, When he first abdicated the throne?',
        "option1": 'Island of Elba',
        "option2": 'Dutchy of Touissant',
        "option3": 'Land of Rivia',
        "option4": 'Saint Pierre',
        "answer": "1"
    },
    {
        "question": 'Who led the army that defeated Napoleon Bonaparte , At the battle of Waterloo?',
        "option1": 'Arthur Wellesley , The duke of Wellington',
        "option2": 'Geralt of Rivia',
        "option3": 'Kaiser Henry the 3rd.',
        "option4": 'Jean Pierre De La Rouge',
        "answer": "1"
    },
    {
        "question": 'Where is the final resting place of Napoleon Bonaparte?',
        "option1": 'Island of Saint Helena',
        "option2": 'Paris, France',
        "option3": 'Moscow, Russia',
        "option4": 'Dungeons on the island of Elba',
        "answer": "2"
    }
]


/*------------------------------------------------------- CSS RELATED GAME VARIABLES -------------------------------------------------------------*/
const startButton = document.getElementById('start');
startButton.addEventListener('click', startGame)
const nextButton = document.getElementById('next');
let submitFlex = document.querySelector('.submit');
const questionContainer = document.querySelector('.question-container');
const container = document.querySelector('.container');
const displayScore = document.getElementById('score-result');
const napoleonQuiz = document.querySelector('.napoleon-h1')


/* -------------------------------------------------------Question Related ------------------------------------------------------------------*/
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var mainContainer = document.getElementById('main-flexbox');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var advanceButton = document.getElementById('next');
var resultCont = document.getElementById('score');






function startGame() {
    console.log('begin');
    startButton.style.display ='none'; // Start button dissapears after initializing the game
    questionContainer.style.display ='initial'; // Makes Question Container appear
    container.style.display ='grid'; // Makes GRID Of answers appear
    nextButton.style.display = 'initial'; // Makes next button visible
    submitFlex.style.justifyContent = 'flex-end'; // Makes next button protrude towards the right side of the screen 
    displayScore.style.visibility = 'hidden';
    loadQuestion(currentQuestion);
    
}




function loadQuestion (index) {
    var q = questions[index];  // This means var q will select index from questions array ,Index 0 is first set of questions and answers. //
    questionEl.textContent = (index + 1) + '. ' + q.question; // Tracks the index of the question , Example 1. Question 1 , 2. Question 2 , Etc.
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }


    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    

    selectedOption.checked = false;
    currentQuestion++;

    if(currentQuestion == totQuestions - 1){
        advanceButton.textContent = 'Finish'; 
    }


    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        displayScore.style.visibility = 'initial';
        questionContainer.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = score + ' /50';
        advanceButton.textContent = 'Game Completed!'
        
        if(score == 50) {
            napoleonQuiz.innerHTML = 'You win!';
            advanceButton.style.pointerEvents = 'none'
            document.body.style.backgroundImage = "url('images/napo.webp')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center top";
        } else {
            napoleonQuiz.innerHTML = ': ( Sorry better luck next time!'
            advanceButton.style.pointerEvents = 'none'
            document.body.style.backgroundImage = "url('images/batttle.webp')";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundPosition = "center center";

        }
        
        return;
    }
    loadQuestion(currentQuestion);
}




















