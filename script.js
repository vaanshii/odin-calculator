
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




