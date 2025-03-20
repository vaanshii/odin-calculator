const backspace = document.querySelector("#backspace");
const display = document.querySelector("#display");
const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (e) => {
    let target = e.target;

    if(target.classList.contains("calc-numbers")) {
        display.value = display.value === "0" ? target.textContent : display.value + target.textContent;
    }

    if(target.textContent === "AC"){
        display.value = "0";
    }
    
    if(target.id === "point") {
        !display.value.includes(".") && (display.value += ".");
    }

    fitDigitsToScreen();
});

backspace.addEventListener("click", () => display.value = display.value.slice(0, -1) || "0");

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
