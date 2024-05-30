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

const updateResult = () => {
  result = num1
  render()
}

const updateNumber = (event) => {
  console.log(event.target.textContent)
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
  
  updateResult()
}

const selectOperator = (event) => {
  // console.log(event.target.textContent)
  operator = event.target.textContent
}

//event handlers
numberBtnEls.forEach((numberBtnEl) =>{
  numberBtnEl.addEventListener('click', updateNumber)
})

operatorBtnEls.forEach((operatorBtnEl) =>{
  operatorBtnEl.addEventListener('click', selectOperator)
})

render()