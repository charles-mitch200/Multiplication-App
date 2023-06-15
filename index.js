// Get HTML elements from the page to JavaScript as objects
const questionElem = document.getElementById("question-js");
const inputElem = document.getElementById("input-ans-js");
const buttonElem = document.querySelector(".btn-js");
const scoreElem = document.getElementById("score-js");
const formElem = document.getElementById("form-js");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Update the question dynamically
questionElem.innerText = `What is ${num1} multiplied by ${num2}?`;

// Correct answer
const correctAnswer = num1 * num2;

// Initialize a score from local storage
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

// Update the score element
scoreElem.innerText = `score: ${score}`;

// Add event listener to the from to activate a callback function on submit
formElem.addEventListener("submit", () => {
  const userAnswer = Number(inputElem.value);
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// function to store the score in local storage
const updateLocalStorage = () => {
  localStorage.setItem("score", JSON.stringify(score));
};
