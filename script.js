
let display = document.querySelector("#display");

const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (e) => {
    let target = e.target;

    if(target.tagName === "BUTTON") {
        display.value += target.textContent;
        display.dispatchEvent(new Event("change"), fitDigitsToScreen());
    }
});

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

display.addEventListener("change", fitDigitsToScreen());




