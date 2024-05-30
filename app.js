let num1;
let num2;
let operator;
let result = 0;

const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const display = document.querySelector('.display')


const render = () => {
  display.textContent = result
}

//functions

const calculate = () => {
  if (num1 && num2 && operator) {
    let n1 = Number(num1);
    let n2 = Number(num2);
  }
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

  console.log(`num1: ${num1}, operator: ${operator}, num2: ${num2}`)
  
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

render()