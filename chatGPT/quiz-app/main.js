fetch(
  'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
  })

const apiUrl =
  'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
const startButton = document.getElementById('start-button')
const quizContainer = document.getElementById('quiz-container')
const restartButton = document.createElement('button')
restartButton.textContent = 'Restart Quiz'
restartButton.style.display = 'none'
quizContainer.appendChild(restartButton)

let currentQuestion = 0
let score = 0
let correctAnswers = 0
let incorrectAnswers = 0

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  startButton.style.display = 'none'
  getQuestions()
}

async function getQuestions() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const questions = data.results
    shuffle(questions)
    displayQuestion(questions[currentQuestion])
  } catch (error) {
    console.error(error)
  }
}

function displayQuestion(question) {
  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    <div class="options-container">
      ${shuffle([...question.incorrect_answers, question.correct_answer])
        .map(
          option => `
        <button class="option">${option}</button>
      `
        )
        .join('')}
    </div>
  `
  const options = document.querySelectorAll('.option')
  options.forEach(option => {
    option.addEventListener('click', () => {
      if (option.textContent === question.correct_answer) {
        option.style.backgroundColor = 'green'
        score += 10
        correctAnswers++
      } else {
        option.style.backgroundColor = 'red'
        score -= 5
        incorrectAnswers++
      }
      currentQuestion++
      if (currentQuestion < 10) {
        setTimeout(() => {
          displayQuestion(questions[currentQuestion])
        }, 1000)
      } else {
        displayResults()
      }
    })
  })
}

function displayResults() {
  quizContainer.innerHTML = `
    <h2>Quiz Results</h2>
    <p>Score: ${score}</p>
    <p>Correct Answers: ${correctAnswers}</p>
    <p>Incorrect Answers: ${incorrectAnswers}</p>
  `
  if (correctAnswers >= 7) {
    quizContainer.innerHTML += '<p>You Won!</p>'
  } else {
    quizContainer.innerHTML += '<p>You Lost!</p>'
  }
  restartButton.style.display = 'block'
  restartButton.addEventListener('click', () => {
    currentQuestion = 0
    score = 0
    correctAnswers = 0
    incorrectAnswers = 0
    restartButton.style.display = 'none'
    startButton.style.display = 'block'
  })
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
