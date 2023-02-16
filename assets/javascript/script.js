const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice'));
const result = document.getElementById('score');

let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'When did Napoleon Bonaparte become the Emperor of France.',
        choice1: '1705',
        choice2: '1804',
        choice3: '1920',
        choice4: '1815',
        answer: 2,
    },
    {
        question: 'What year did Napoleon Bonaparte invade Russia?',
        choice1: '1709',
        choice2: '1812',
        choice3: '1922',
        choice4: '1821',
        answer: 2,
    },
    {
        question: 'To What island was Napoleon exiled, When he first abdicated the throne?',
        choice1: 'Island of Elba',
        choice2: 'Dutchy of Touissant',
        choice3: 'Land of Rivia',
        choice4: 'Saint Pierre',
        answer: 1,
    },
    {
        question: 'Who led the army that defeated Napoleon Bonaparte , At the battle of Waterloo?',
        choice1: 'Arthur Wellesley , The duke of Wellington',
        choice2: 'Geralt of Rivia',
        choice3: 'Kaiser Henry the 3rd.',
        choice4: 'Jean Pierre De La Rouge',
        answer: 1,
    },

]