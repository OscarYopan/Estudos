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

const startButton = document.getElementById('start-button')
const restartButton = document.getElementById('restart-button')
const quizContainer = document.getElementById('quiz-container')
const questionElement = document.getElementById('question')
const optionsElement = document.getElementById('options')
const submitButton = document.getElementById('submit-button')
const resultsElement = document.getElementById('results')

let shuffledQuestions, currentQuestionIndex

// Add event listener to start button
startButton.addEventListener('click', startQuiz)

// Add event listener to restart button
restartButton.addEventListener('click', () => {
  // Reset score
  score = 0
  // Reset current question index
  currentQuestionIndex = 0
  // Show the quiz container
  quizContainer.style.display = 'block'
  // Hide the restart button
  restartButton.style.display = 'none'
  // Start quiz
  startQuiz()
})

// Add event listener to submit button
submitButton.addEventListener('click', () => {
  // Get the selected option
  const selectedOption = document.querySelector('input[type=radio]:checked')

  // If no option is selected, return
  if (!selectedOption) return

  // Get the selected answer
  const selectedAnswer = selectedOption.nextElementSibling.textContent

  // Check if the selected answer is correct
  if (
    selectedAnswer === shuffledQuestions[currentQuestionIndex].correct_answer
  ) {
    // Increment score
    score++
  }

  // Increment current question index
  currentQuestionIndex++

  // Clear options
  clearOptions()

  // If there are more questions, display the next question
  if (currentQuestionIndex < shuffledQuestions.length) {
    displayQuestion()
  } else {
    // End quiz
    endQuiz()
  }
})

// Function to start the quiz
function startQuiz() {
  // Hide the start button
  startButton.style.display = 'none'
  // Shuffle the questions
  shuffledQuestions = shuffleArray(questions)
  // Reset score
  score = 0
  // Set current question index to 0
  currentQuestionIndex = 0
  // Display the quiz container
  quizContainer.style.display = 'block'
  // Display the first question
  displayQuestion()
}

// Function to display a question
function displayQuestion() {
  // Get the current question
  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  // Display the question
  questionElement.textContent = currentQuestion.question

  // Shuffle the answer options
  const shuffledOptions = shuffleArray([
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer
  ])

  // Display the answer options
  shuffledOptions.forEach(option => {
    const optionElement = document.createElement('div')
    optionElement.classList.add('option')
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'radio')
    inputElement.setAttribute('name', 'option')
    const labelElement = document.createElement('label')
    labelElement.textContent = option
    optionElement.appendChild(inputElement)
    optionElement.appendChild(labelElement)
    optionsElement.appendChild(optionElement)
  })
}

// Function to clear the answer options
function clearOptions() {
  while (optionsElement.firstChild) {
    optionsElement.removeChild(optionsElement.firstChild)
  }
}

// Function to end the quiz
function endQuiz() {
  // Hide the quiz container
  quizContainer.style.display = 'none'
  // Show the restart button
  restartButton.style.display = 'block'
  // Display the results
  resultsElement.style.display = 'block'
  resultsElement.innerHTML = `<p>You answered ${score} out of ${shuffled}</p>`
}
