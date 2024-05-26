/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const operator = document.querySelectorAll('.operator')

/*-------------------------------- Variables --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


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
