/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const operators  = document.querySelectorAll('.operator')

const calculator = document.querySelector('#calculator');

let firstNumber = null;
let secondNumber = null;
let chosenOperator = null;

/*-------------------------------- Variables --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
      const value
    });
  });
  // testing
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
    let num1;
    num1  = event.target.innerText
    console.log(num1)
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
    operator = '*'
  }
});
console.log(operator)
/*-------------------------------- Functions --------------------------------*/
function calculation(num1,num2) {
  if (num1 == null) {
    console.log('please click a number');
  }else {

  }
}

// im thinking the function should take 3 args (input1, operator, input2)
// or maybe the function callback will just incorporate all three with special logic for the operator

// As a user, I want to be able to select numbers so that I can perform operations with them.
/*  */

// As a user, I want to be able to add two numbers together.
/*   */

// As a user, I want to be able to subtract one number from another.
/*  */

// As a user, I want to be able to multiply two numbers together.


// As a user, I want to be able to divide one number by another.


// As a user, I want to be able to see the output of the mathematical operation.


// As a user, I want to be able to clear all operations and start from 0.
