function add() {
  var num1 = parseFloat(document.getElementById('num1').value)
  var num2 = parseFloat(document.getElementById('num2').value)
  document.getElementById('result').value = num1 + num2
}

function subtract() {
  var num1 = parseFloat(document.getElementById('num1').value)
  var num2 = parseFloat(document.getElementById('num2').value)
  document.getElementById('result').value = num1 - num2
}

function multiply() {
  var num1 = parseFloat(document.getElementById('num1').value)
  var num2 = parseFloat(document.getElementById('num2').value)
  document.getElementById('result').value = num1 * num2
}

function divide() {
  var num1 = parseFloat(document.getElementById('num1').value)
  var num2 = parseFloat(document.getElementById('num2').value)
  document.getElementById('result').value = num1 / num2
}

// Get references to the input fields and buttons
var num1Input = document.getElementById('num1')
var num2Input = document.getElementById('num2')
var addButton = document.getElementById('add')
var subtractButton = document.getElementById('subtract')
var multiplyButton = document.getElementById('multiply')
var divideButton = document.getElementById('divide')

// Add event listeners to the input fields and buttons
num1Input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    num2Input.focus()
  }
})

num2Input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    add()
  }
})

addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)

document.addEventListener('keydown', function (event) {
  if (event.key === '+') {
    event.preventDefault()
    add()
  } else if (event.key === '-') {
    event.preventDefault()
    subtract()
  } else if (event.key === '*') {
    event.preventDefault()
    multiply()
  } else if (event.key === '/') {
    event.preventDefault()
    divide()
  }
})
