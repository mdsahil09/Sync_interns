const questions = [
    {
        question: '1.What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
   
    {
        question: '2.The national currency of the United States of America (USA) is?',
        
        answers: [
            { text: 'Euro', correct: false },
            { text: 'Dollar', correct: true },
            { text: 'Randd', correct: false },
            { text: 'Yen', correct: false }
        ]
    },
    {
        question: '3.Which country won the FIFA World Cup in 2018?',
        answers: [
            { text: 'Germany', correct: false },
            { text: 'France', correct: true },
            { text: 'Spain', correct: false },
            { text: 'Tangania', correct: false }
        ]
    },
    {
        question: '4.Communication is a process of ',
    
        answers: [
            { text: 'Transfer Of Channel', correct: false },
            { text: 'Transfer Of Infomation', correct: true },
            { text: 'Transfer Of Circuit', correct: false },
            { text: 'Transfer Of Energy', correct: false }
        ]
    },

    {
        question: '5.Which Of the following laws is associated with the heating effect of electric current? ',
    
        answers: [
            { text: 'Ohms Law', correct: false },
            { text: 'Joules Law', correct: true },
            { text: 'Faradays Law', correct: false },
            { text: 'Yens Law', correct: false }
        ]
    },

    {
        question: '6.Which element in the periodic table forms maximum number of compounds ? ',
    
        answers: [
            { text: 'H', correct: false },
            { text: 'S', correct: true },
            { text: 'R', correct: false },
            { text: 'Y', correct: false }
        ]
    },
    {
        question: '7.A body at rest can have ? ',
    
        answers: [
            { text: 'Speed ', correct: false },
            { text: 'Momentum', correct: false },
            {  text: 'Velocity', correct: true},
            { text: 'Energy', correct: false }
        ]
    },
    {
        question: '8.The force of attraction between two objects is called the ? ',
    
        answers: [
            { text: 'Centripetal force ', correct: false },
            { text: 'Electromagnetic force', correct: false },
            {  text: 'Gravitional force ', correct: true},
            { text: 'Centrifugal force', correct: false }
        ]
    },
 
 
    {
        question: '9.In case of hypermetropia , where is the image formed ?',
        answers: [
            { text: 'In front of retina ', correct: false },
            { text: 'On the retina', correct: false },
            { text: 'Behind the ratina ', correct: true },
            { text: 'On the cornea', correct: false }
        ]
    },
    {
        question: '10.The conversion of a solid directly into its vapour is called?',
        answers: [
            { text: 'Evaporation  ', correct: false },
            { text: 'Condensation', correct: false },
            { text: 'Vaporisation', correct: false },
            { text: 'Sublimation', correct: true }
        ]
    },
    {
        question: '11.Which of the following produces Testosterone in man ?',
        answers: [
            { text: 'Prostate Gland ', correct: false },
            { text: 'Scrotum', correct: false },
            { text: 'Vas deferens', correct: false },
            { text: 'Testes', correct: true }
        ]
    },
    
    {
        question: ' 12.Group of cells having a common origin and performing similar functions are called ?',
        answers: [
            { text: 'Tissues', correct: true },
            { text: 'Organs', correct: false },
            { text: 'Organ Systems ', correct: false },
            { text: 'None of the above ', correct: false}
        ]
    },
    {
        question: '13.Which country won the UEFA Euro 2020 football championship?',
        answers: [
            { text: 'Portugal', correct: false },
            { text: 'France', correct: false },
            { text: 'Germany', correct: false },
            { text: 'Italy', correct: true}
        ]
    },

    {
        question: '14.Who is the all-time leading run-scorer in international cricket?',
        answers: [
            { text: 'Sachin Tendulkar', correct: true },
            { text: 'Ricky Ponting', correct: false },
            { text: 'Virat Kohli', correct: false },
            { text: 'Brian Lara', correct: false}
        ]
        
    },
    {
        question: '15.Which cricket format is also known as "Limited Overs Cricket"?',
        answers: [
            { text: 'Test Cricket', correct: false },
            { text: 'T20 Cricket', correct: false },
            { text: 'ODI Cricket',  correct: true },
            { text: 'First-class Cricket', correct: false}
        ]
        
    },
    {
        question: '16.Which football club has won the most UEFA Champions League titles?',
        answers: [
            { text: 'Barcelona', correct:false},
            { text:  'AC Milan',correct: false },
            { text: 'Real Madrid',  correct: true },
            { text: 'Manchester United', correct: false}
        ]
        
       
    },

    {
        question: '17.What is the basic economic problem?',
        answers: [
            { text: 'Inflation',  correct:false},
            { text:  'Unemployment',correct: false },
            { text: 'Scarcity',   correct: true },
            { text:'Poverty', correct: false}
        ]
        
    },
    {
        question: '18.Which economic system relies on supply and demand with minimal government intervention?',
        answers: [
            { text: 'Socialism',  correct:false},
            { text:  'Unemployment',correct: false },
            { text: 'Capitalism',  correct: true },
            { text:'Communism', correct: false}
        ]
        
    },
    {
    
        question: '19.What does GDP stand for?',
        answers: [
            { text: 'General Development Plan', correct:false},
            { text:  'Unemployment',correct: false },
            { text: 'Gross Domestic Product',  correct: true },
            { text:'Government Debt Percentage', correct: false}
        ]
        
    },
    {
        
        question: '20.What is the term for the total value of all goods and services produced by a country in a specific time period?',
        answers: [
            { text: 'Net Exports',  correct:false},
            { text:  'Trade Surplus',correct: false },
            { text: 'Gross National Product',  correct: true },
            { text:'Budget Deficit',correct: false}
        ]
        
    },

];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.querySelector('.next-button');
const scoreContainer = document.getElementById('score');
const scoreDisplay = document.getElementById('score-container');
const resultGif = document.getElementById('result-gif');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    scoreDisplay.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function endGame() {
    nextButton.classList.remove('hide');
    nextButton.innerText = 'Play Again';
    nextButton.addEventListener('click', startGame);

    scoreContainer.innerText = ` ${score}/${questions.length}
     And 
    Your Prize Is `;
  
    scoreDisplay.classList.remove('hide');

    if (score > 14) {
        
        resultGif.innerHTML = '<img src="images (2).jpg" alt="You Win" >';
        
        
    }
    else{
        resultGif.innerHTML = '<img src="Bat.jpg" alt="You Lose">';
    }
}

function nextQuestion() {
    nextButton.classList.add('hide');
    resultGif.innerHTML = '';
    startGame();
}

startGame();
