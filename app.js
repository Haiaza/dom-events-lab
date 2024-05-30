/*-------------------------------- Constants --------------------------------*/
let num1 = "";
let num2 = "";
let numChoice = "";
let opChoice = "";

const render = () =>{
  display.textContent = result
}

const updateResult = (event) => {
  result = num1
  render()
}

const updateNumbers = (event) => {
  if(num1){
    num1 = event.target.textContent
  }else{
    num1 = event.target.textContent

    updateResult()
  }
}
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const btnEls = document.querySelectorAll(".button");
const numberEls = document.querySelectorAll(".number");
const operatorEls = document.querySelectorAll(".operator");
const equalsEl = document.querySelector(".equals");
const display = document.querySelector(".display");

const calculator = document.querySelector("#calculator");
/*----------------------------- Event Listeners -----------------------------*/
btnEls.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //testing purposes
    // console.log(event.target.innerText);
  });
});

calculator.addEventListener("click", (event) => {
  // testing purposes
  // console.log(event.target.innerText);
  if (event.target.classList.contains("number")) {
    numberClicked(event.target.innerText);
    //function for numbers
    //must update the display
  }
});
/*-------------------------------- Functions --------------------------------*/


function numberClicked(number) {
  numChoice += number;
  display.innerText = numChoice;
}

function opClicked(operator) {}

/* mental notes*/
//At this point in the code we can select numbers. When we do they update the display
//Pressing a op does nothing.
//Technically the numbers inside of the display are strings.
