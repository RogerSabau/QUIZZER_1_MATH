// script.js
let score = 0;
let currentQuestion = {};

function generateQuestion() {
  // Randomly choose a question type: 0 = Addition/Subtraction, 1 = Multiplication/Add, 2 = Word Problem
  const questionType = Math.floor(Math.random() * 3); 

  let question;
  let answer;

  if (questionType === 0) {
    // Two-Step Addition and Subtraction
    const num1 = Math.floor(Math.random() * 50) + 20; // Random number between 20 and 69
    const num2 = Math.floor(Math.random() * 30) + 10; // Random number between 10 and 39
    const num3 = Math.floor(Math.random() * 20) + 1;  // Random number between 1 and 20
    
    question = `(${num1} + ${num2}) - ${num3}`;
    answer = (num1 + num2) - num3;

  } else if (questionType === 1) {
    // Two-Step Multiplication and Addition
    const num1 = Math.floor(Math.random() * 10) + 5; // Random number between 5 and 14
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num3 = Math.floor(Math.random() * 20) + 1;  // Random number between 1 and 20

    question = `(${num1} * ${num2}) + ${num3}`;
    answer = (num1 * num2) + num3;

  } else {
    // Simple Word Problem (Subtraction)
    const num1 = Math.floor(Math.random() * 40) + 20; // Random number between 20 and 59
    const num2 = Math.floor(Math.random() * 20) + 1;  // Random number between 1 and 20

    question = `If Sarah has ${num1} apples and gives away ${num2}, how many does she have left?`;
    answer = num1 - num2;
  }

  // Set the question and display it
  currentQuestion = { question, answer };
  document.getElementById('question').textContent = question;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);

  if (userAnswer === currentQuestion.answer) {
    score++;
    document.getElementById('feedback').textContent = "Correct!";
    document.getElementById('feedback').style.color = "green";
    document.getElementById('feedback').className = 'correct';
  } else {
    document.getElementById('feedback').textContent = `Oops! The correct answer was ${currentQuestion.answer}`;
    document.getElementById('feedback').style.color = "red";
    document.getElementById('feedback').className = 'wrong';
  }

  // Update score and generate a new question
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('answer').value = ''; // Clear the input
  generateQuestion(); // Generate a new question
}

// Start the quiz by generating the first question
generateQuestion();
