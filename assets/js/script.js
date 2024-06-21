// Add questions and answers

const quizData = [{

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
    },

];
let currentQuestion = 0;
let score = 0;

// Let user start a quiz after creating a username
// If user does not enter the username, alert screen will appear.

function startQuiz() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('display-username').innerText = username;
        document.getElementById('username-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        loadQuiz();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter your user name!",
          });
          usernameInput.focus();
    }
}
// Load quizes and the username will be placed in the heading 


function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    if (currentQuestion >= quizData.length) {
        displayResult();
        return;
    }
// Create heading for question and divs for answers 

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
// After one answer is selected, user cannot select the other answer anymore. 
// "Next" button will appear. 

function selectAnswer(selectedElement, correctAnswer) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.style.pointerEvents = 'none';

    });

    if (selectedElement.innerText === correctAnswer) {
        selectedElement.style.backgroundColor = '#078080';
        document.getElementById('result').innerText = 'Correct!';
        score++;
    } else {
        selectedElement.style.backgroundColor = '#f45d48';
        document.getElementById('result').innerText = 'Incorrect!';
    }
    document.getElementById('next-button').style.display = 'block';
}
// Clear the result and load next question 

function nextQuestion() {
    currentQuestion++;
    document.getElementById('result').innerText = '';
    loadQuiz();
}

// Display a final result of all questions 

function displayResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<p>You scored ${score} out of ${quizData.length}!</p>`;
    quizContainer.className = 'result-message';
    document.getElementById('next-button').style.display = 'none';

    // Show "Play Again" button and to load quiz again when it's clicked 

    const playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'Play Again!';
    playAgainButton.onclick = () => location.reload();
    quizContainer.appendChild(playAgainButton);
}

window.onload = loadQuiz;