// Calculator logic
let calculation = [];

function insert(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
  calculation = [];
}

function backspace() {
  let currentResult = document.getElementById('result').value;
  document.getElementById('result').value = currentResult.substr(0, currentResult.length - 1);
}

function calculate() {
  let expression = document.getElementById('result').value;
  let result = eval(expression);
  document.getElementById('result').value = result;
  calculation.push(expression + ' = ' + result);
  console.log(calculation);
}
