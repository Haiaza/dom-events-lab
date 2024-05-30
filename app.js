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
  if (num1 && operator && num2) {
    let n1 = Number(num1);
    let n2 = Number(num2);

    if (operator === '+') {
      result = n1 + n2
    } else {
      
    }
  }
}


const updateResult = () => {
  result = (num1) //this needs to be
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

render()