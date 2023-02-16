const startButton = document.getElementById('start');
startButton.addEventListener('click', startGame)


/*------------------------------------------------------- CSS RELATED GAME VARIABLES -------------------------------------------------------------*/
const nextButton = document.getElementById('next');
let submitFlex = document.querySelector('.submit');
const questionContainer = document.querySelector('.question-container');
const container = document.querySelector('.container');


/* -------------------------------------------------------Question Related ------------------------------------------------------------------*/

let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const choice = document.querySelectorAll('value');











function startGame() {
    console.log('begin');
    startButton.style.display ='none'; // Start button dissapears after initializing the game
    questionContainer.style.display ='initial'; // Makes Question Container appear
    container.style.display ='grid'; // Makes GRID Of answers appear
    nextButton.style.display = 'initial'; // Makes next button visible
    submitFlex.style.justifyContent = 'flex-end'; // Makes next button protrude towards the right side of the screen
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}






function showQuestion(question) {
    questionElement.innerText = question.question;
    
        

    
        
       

    
    
}




function selectAnswer() {


}






const questions = [
    {
        question: 'When did Napoleon Bonaparte become the Emperor of France.',
        answers: [
            {text: '1804', correct: true},
            {text: '1815', correct: false},
            {text: '1705', correct: false},
            {text: '1920', correct: false}
        ]
    },
    {
        question: 'What year did Napoleon Bonaparte invade Russia?',
        answers: [
            {text: '1819', correct: false},
            {text: '1812', correct: true},
            {text: '1925', correct: false},
            {text: '1710', correct: false}
        ]
    },
    {
        question: 'To What island was Napoleon exiled, When he first abdicated the throne?',
        answers: [
            {text: 'Island of Elba', correct: true},
            {text: 'Island Dutchy of Touissant', correct: false},
            {text: 'Saint Pierre', correct: false},
            {text: 'Island of Rivia', correct: false}
        ]
    },
    {
        question: 'Who led the army that defeated Napoleon Bonaparte , At the battle of Waterloo?',
        answers: [
            {text: 'Geralt of Rivia', correct: false},
            {text: 'Jean Pierre De La Rouge', correct: false},
            {text: 'Kaiser Henry the 3rd', correct: false},
            {text: 'Arthur Wellesley , The duke of Wellington', correct: true}
        ]
    }
]