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
