let num1;
let num2;
let operator;
let result = 0;

const btnEls = document.querySelectorAll('.button')
const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const display = document.querySelector('.display')

const render = () => {
  display.textContent = num1
  // this change correlates with the updateResult func to assign the display content
}

//functions

const clear = () => {
  if (btnEl.innerHTML === 'C') {
    let num1;
    let num2;
    let operator;
    let result = 0;
    render()
  }
}

const calculate = () => {
  if (num1 && num2 && operator) {
    const n1 = Number(num1);
    const n2 = Number(num2);
// im not sure if the const makes any difference versus let , but ill keep it this way
// the error was occuring because the variables referenced were scoped out
    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }
  }
    // this saves me a bunch of if statements

num1 = result.toString()
// converting the numberVersion of num1 and num2 back into a string for the display
render()
  }


const updateResult = () => {
  result = num1 
  render()
}

// i see why this was plural now 
const updateNumbers = (event) => {
  // console.log(event.target.textContent)
  if(operator === undefined ){
    if(!num1){
      num1 = event.target.textContent;
    } else {
      num1 += event.target.textContent
    }
  } else if(!num2) {
    num2 = event.target.textContent;
  } else {
    num2 += event.target.textContent
  }

  console.log(` ${num1}  ${operator}  ${num2}`)
  
  updateResult()
}

const selectOperator = (event) => {
  // console.log(event.target.textContent)
  operator = event.target.textContent
}

//event handlers
numberBtnEls.forEach((numberBtnEl) =>{
  numberBtnEl.addEventListener('click', updateNumbers)
})

operatorBtnEls.forEach((operatorBtnEl) =>{
  operatorBtnEl.addEventListener('click', selectOperator)
})

equalBtnEl.addEventListener('click', calculate)



btnEls.forEach((btnEl) => {
  btnEl.addEventListener('click', clear)
})
render()

/*
As a user, I want to be able to select numbers so that I can perform operations with them. Check!
As a user, I want to be able to add two numbers together. Check!
As a user, I want to be able to subtract one number from another. Check!
As a user, I want to be able to multiply two numbers together. Check!
As a user, I want to be able to divide one number by another. Check!
As a user, I want to be able to see the output of the mathematical operation. Check!
As a user, I want to be able to clear all operations and start from 0.
*/