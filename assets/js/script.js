// Add questions and answers
const quizData = [
    {

        question: "Which country is the largest producer of coffee in the world?",
        options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
        correct: "Brazil"
    },
    {
        question: "Which country is espresso originally from?",
        options: ["Italy", "Brazil", "France", "USA"],
        correct: "Italy"
    },
    {
        question: "What is used in a cappuccino?",
        options: ["Milk", "Cream", "Water", "Soda"],
        correct: "Milk"
    },
    {
        question: "Which of the following is not a type of coffee?",
        options: ["Americano", "Latte", "Mocha", "Tea"],
        correct: "Tea"
    },
    {
        question: "What is the most popular way to prepare coffee at home?",
        options: ["French Press", "Espresso Machine", "Drip Coffee Maker", "AeroPress"],
        correct: "Drip Coffee Maker"
    },
    {
        question: "Which of the following is a common coffee brewing method that uses pressure to extract flavor?",
        options: ["Pour Over", "French Press", "Espresso", "Cold Brew"],
        correct: "Espresso"
    },
    {
        question: "What is the term for coffee that is brewed by steeping coarse coffee grounds in cold water for an extended period?",
        options: ["Iced Coffee", "Cold Brew", "Nitro Coffee", "Frappuccino"],
        correct: "Cold Brew"
    },
    {
        question: "Which type of coffee roast has the highest caffeine content?",
        options: ["Light Roast", "Medium Roast", "Dark Roast", "French Roast"],
        correct: "Light Roast"
    },
    {
        question: "What is the name of the coffee drink that consists of a shot of espresso poured over a scoop of vanilla ice cream?",
        options: ["Affogato", "Macchiato", "Latte", "Mocha"],
        correct: "Affogato"
    },
    {
        question: "Which coffee variety is known for its smooth, mild flavor and is often preferred by specialty coffee shops?",
        options: ["Robusta", "Arabica", "Liberica", "Excelsa"],
        correct: "Arabica"
    }
];

// Tracks the current question index 
// Tracks the user's score

let currentQuestion = 0;
let score = 0;

// Bind event listeners for the start button and the next button once the DOM content is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('start-button').addEventListener('click', startQuiz);
    document.getElementById('next-button').addEventListener('click', nextQuestion);

    //  Add event listener for ENTER key press on username input 
    document.getElementById('username').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            startQuiz();
        }
    });
});

// Let user start a quiz after creating a username
// Hide the username container and show the quiz container
// Load the first question after shuffling questions 
// If user does not enter the username, or enter a space, alert screen will appear

function startQuiz() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username) {
        document.getElementById('display-username').innerText = username;
        document.getElementById('username-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        shuffleQuestions();
        loadQuiz();
        updateCounter();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter your user name!",
        });
        usernameInput.focus();
    }
}

// Load the current question and the its options into the quiz container
// If all questions have been answered, displays the result 

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    if (currentQuestion >= quizData.length) {
        displayResult();
        return;
    }
    // Create heading for the question and divs for the answers 

    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement('h2');
    questionElement.innerText = questionData.question;
    questionElement.className = 'question-text';
    quizContainer.appendChild(questionElement);

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer';
        optionElement.innerText = option;
        optionElement.onclick = () => selectAnswer(optionElement, questionData.correct);
        quizContainer.appendChild(optionElement);
    });
    document.getElementById('next-button').style.display = 'none';
}

// Handle when the answer is selected (Correct and Incorrect)
// After one answer is selected, user cannot select the other answer anymore
// "Next" button will appear 

function selectAnswer(selectedElement, correctAnswer) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.style.pointerEvents = 'none';
    });

    const resultElement = document.getElementById('result');
    if (selectedElement.innerText === correctAnswer) {
        selectedElement.style.backgroundColor = '#078080';
        resultElement.innerText = 'Correct!';
        resultElement.style.color = '#078080';
        score++;
    } else {
        selectedElement.style.backgroundColor = '#f45d48';
        resultElement.innerText = 'Incorrect!';
        resultElement.style.color = '#f45d48';
        answers.forEach(answer => {
            if (answer.innerText === correctAnswer) {
                answer.style.backgroundColor = '#078080';
            }
        });
    }
    document.getElementById('next-button').style.display = 'block';
}

// Load the next question or displays the result if all questions are answered.

function nextQuestion() {
    currentQuestion++;
    document.getElementById('result').innerText = '';
    if (currentQuestion < quizData.length) {
        loadQuiz();
        updateCounter();
    } else {
        displayResult();
    }
}

// Show the question counter in the question container 

function updateCounter() {
    document.getElementById('counter').innerText = `${currentQuestion + 1} / ${quizData.length}`;
}

// Display a final result of all questions 
// Hide the question counter 
// Display a button to play again

function displayResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<p>You scored ${score} out of ${quizData.length}!</p>`;
    document.getElementById('counter').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';

    // Show "Play Again" button and to load quiz again when it's clicked 

    const playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'Play Again!';
    playAgainButton.onclick = resetQuiz;
    quizContainer.appendChild(playAgainButton);
}
// Reset the quiz. 
// Let user to start over the quiz by entering a username again. 

function resetQuiz() {
    currentQuestion = 0;
    score = 0;

    // Reset the display of necessary elements
    document.getElementById('username-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').innerText = '';
    document.getElementById('counter').style.display = 'block';

    // Clear the quiz container's content
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('counter').innerHTML = '';
    document.getElementById('next-button').style.display = 'none';
}

// Shuffles the questions in the quizData arrary

function shuffleQuestions() {
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}