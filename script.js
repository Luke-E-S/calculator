let [firstNumber, secondNumber, operator] = ["", "", ""];

function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

function operate(n1, n2, op) {
    if(op === "+") {
        return add(n1, n2);
    }
    else if(op === "-") {
        return subtract(n1, n2);
    }
    else if(op === "*") {
        return multiply(n1, n2);
    }
    else if(op === "/") {
        return divide(n1, n2);
    }
}
const display = document.querySelector("#display");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnZero = document.getElementById("zero");

btnOne.addEventListener("click", () => {
    firstNumber += "1";
    display.textContent = firstNumber;
    }
);
btnTwo.addEventListener("click", () => {
    firstNumber += "2";
    display.textContent = firstNumber;
    }
);
btnThree.addEventListener("click", () => {
    firstNumber += "3";
    display.textContent = firstNumber;
    }
);
btnFour.addEventListener("click", () => {
    firstNumber += "4";
    display.textContent = firstNumber;
    }
);
btnFive.addEventListener("click", () => {
    firstNumber += "5";
    display.textContent = firstNumber;
    }
);
btnSix.addEventListener("click", () => {
    firstNumber += "6";
    display.textContent = firstNumber;
    }
);
btnSeven.addEventListener("click", () => {
    firstNumber += "7";
    display.textContent = firstNumber;
    }
);
btnEight.addEventListener("click", () => {
    firstNumber += "8";
    display.textContent = firstNumber;
    }
);
btnNine.addEventListener("click", () => {
    firstNumber += "9";
    display.textContent = firstNumber;
    }
);
btnZero.addEventListener("click", () => {
    firstNumber += "0";
    display.textContent = firstNumber;
    }
);