const questionElement = document.querySelector(".nes-balloon p");
const buttonContainer = document.querySelector(".button-container");
const container = document.querySelector(".nes-container");

let currentQuestion;
let isAnswered = false;

function generateQuestion() {
  isAnswered = false;
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 + num2;
  const hasCorrectAnswer = Math.random() > 0.5;

  currentQuestion = {
    correctAnswer,
    hasCorrectAnswer,
    question: `${num1} + ${num2} = ?`,
    options: hasCorrectAnswer
      ? generateOptions(correctAnswer)
      : generateWrongOptions(correctAnswer),
  };
  renderQuestion();
}

function generateOptions(correctAnswer) {
  const options = new Set([correctAnswer]);
  while (options.size < 2) {
    options.add(Math.floor(Math.random() * 20) + 1);
  }
  return [...options];
}

function generateWrongOptions(correctAnswer) {
  const options = new Set();
  while (options.size < 2) {
    const wrongOption = Math.floor(Math.random() * 20) + 1;
    if (wrongOption !== correctAnswer) {
      options.add(wrongOption);
    }
  }
  return [...options];
}

function renderQuestion() {
  questionElement.textContent = currentQuestion.question;
  buttonContainer.innerHTML = "";

  currentQuestion.options.forEach((option) =>
    createAnswerButton(option, false)
  );

  if (!currentQuestion.hasCorrectAnswer) {
    createAnswerButton("NO CORRECT ANSWER", true);
  }
}

function createAnswerButton(text, isNoCorrectAnswer) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("nes-btn");
  button.addEventListener("click", () => checkAnswer(text, isNoCorrectAnswer));
  buttonContainer.appendChild(button);
}

function checkAnswer(selectedAnswer, isNoCorrectAnswer) {
  if (isAnswered) {
    return;
  }
  isAnswered = true;

  if (currentQuestion.hasCorrectAnswer) {
    document.querySelectorAll(".nes-btn").forEach((btn) => {
      btn.disabled = true;
      if (Number(btn.textContent) === currentQuestion.correctAnswer) {
        btn.classList.add("is-success");
      } else {
        btn.classList.add("is-error");
      }
    });
  } else {
    document.querySelectorAll(".nes-btn").forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === "NO CORRECT ANSWER") {
        btn.classList.add("is-success");
      } else {
        btn.classList.add("is-error");
      }
    });
  }

  const isCorrect = isNoCorrectAnswer
    ? !currentQuestion.hasCorrectAnswer
    : selectedAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    container.classList.add("bg-green");
    showActionButton("Next", "bg-green");
  } else {
    container.classList.add("bg-red");
    showActionButton("Restart", "bg-red");
  }
}

function showActionButton(text, bgClass) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("nes-btn");
  button.addEventListener("click", () => {
    container.classList.remove(bgClass);
    button.remove();
    generateQuestion();
  });
  container.appendChild(button);
}

generateQuestion();
