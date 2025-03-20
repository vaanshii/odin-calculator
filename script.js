const backspace = document.querySelector("#backspace");
const display = document.querySelector("#display");
const buttonContainer = document.querySelector(".button-container");

let initialNumber = "";
let operator = "";
let shouldResetDisplay = false;

buttonContainer.addEventListener("click", (e) => {
    let target = e.target;

    if(target.id === "point") {
        !display.value.includes(".") && (display.value += ".");
    }

    if(target.classList.contains("calc-numbers")) {
      if(display.value === "0" || shouldResetDisplay) {
        display.value = target.textContent;
        shouldResetDisplay = false;
      }
      else {
        display.value += target.textContent;
      }
    }

    if(target.classList.contains("calc-operators")) {
        handleOperator(target.id);
    }

    if(target.classList.contains("calc-equals")) {
        operate();
        operator = "";
    }

    if(target.textContent === "AC"){
        display.value = "0";
        initialNumber = "";
        operator = "";
        shouldResetDisplay = false;
    }
    
    fitDigitsToScreen();
});

backspace.addEventListener("click", () => display.value = display.value.slice(0, -1) || "0");

function handleOperator(selectedOperator) {
    if(initialNumber !== "" && operator !== "") {
        operate();
    }

    initialNumber = display.value;
    operator = selectedOperator;
    shouldResetDisplay = true;
}

function operate() {

    if(!operator || initialNumber === "") return;

    let result;
    let currentNumber = display.value;
    switch(operator) {
        case '+':
            result = Math.round(addition(initialNumber, currentNumber) * 100) / 100;
            break;
        case '-':
            result = Math.round(subtraction(initialNumber, currentNumber) * 100) / 100;
            break;
        case '*':
            result = Math.round(multiplication(initialNumber, currentNumber) * 100) / 100;
            break;
        case '/':
            result = Math.round(division(initialNumber, currentNumber) * 100) / 100;
            break;
    }

    display.value = result;
    initialNumber = result;
    shouldResetDisplay = true;
}

function addition(firstNum, secondNum) {
    return +firstNum + +secondNum;
}

function subtraction(firstNum, secondNum) {
    return +firstNum - +secondNum;
}

function multiplication(firstNum, secondNum) {
    return +firstNum * +secondNum;
}

function division(firstNum, secondNum) {
    if(+secondNum === 0) return "Syntax Error";

    return +firstNum / +secondNum;
}

function fitDigitsToScreen() {
    const display = document.querySelector("#display");
    const screen = document.querySelector(".screen");

    let fontSize = 3;
    display.style.fontSize = fontSize + "em";

    while(display.scrollWidth > screen.clientWidth && fontSize > 1) {
        fontSize -= 0.1;
        display.style.fontSize = fontSize + "em";
    }
}
