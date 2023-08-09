const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the operation (+, -, *, /): ', (operator) => {
      rl.question('Enter the second number: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let result;

        switch (operator) {
          case '+':
            result = add(num1, num2);
            break;
          case '-':
            result = subtract(num1, num2);
            break;
          case '*':
            result = multiply(num1, num2);
            break;
          case '/':
            result = divide(num1, num2);
            break;
          default:
            result = 'Invalid operator';
        }
