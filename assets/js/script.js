// Add quiz data

const quizData = [
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
    }
  ];
 let currentQuestion = 0;
 let score = 0;

// Show the current question and options
function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    if (currentQuestion >= quizData.length) {
        displayResult();
        return;
    }

    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement('h2');
    questionElement.innerText = questionData.question;
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
// Handle when the answer is selected (correct & incorrect)
function selectAnswer(selectedElement, correctAnswer) {
    const answers = document.querySelectorAll('answer');
    answers.forEach(answer => {
        answer.style.pointerEvents = 'none';

    });

    if (selectAnswer.innerText === correctAnswer) {
        selectedElement.style.backgroundColor = '#078080';
        document.getElementById('result').innerText = 'Correct!';
        score++;
    } else {
        selectedElement.style.backgroundColor = '#f45d48';
        document.getElementById('result').innerText = 'Incorrect!';
    }
    document.getElementById('next-button').style.display = 'block';
}
// Show next question
function nextQuestion () {
    currentQuestion++;
    document.getElementById('result').innerText = '';
    loadQuiz();
}
window.onload = loadQuiz;