let num1;
let num2;
let operator;
let result = 0;

const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const display = document.querySelector('.display')


//functions
const updateNumber = (event) => {
  console.log(event.target.textContent)
  display.textContent = event.target.textContent
}


//event handlers
numberBtnEls.forEach((numberBtnEl) =>{
  numberBtnEl.addEventListener('click', updateNumber)
})