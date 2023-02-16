const startButton = document.getElementById('start');
startButton.addEventListener('click', startGame)

const nextButton = document.getElementById('next');
let submitFlex = document.querySelector('.submit');
const questionContainer = document.querySelector('.question-container');
const container = document.querySelector('.container');








function startGame() {
    console.log('begin');
    startButton.style.display ='none';
    questionContainer.style.display ='revert';
    container.style.display ='grid';
    nextButton.style.display = 'initial';
    submitFlex.style.justifyContent = 'flex-end';

    
    
    

}

function setNextQuestion() {

}


function selectAnswer() {

}