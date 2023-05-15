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

const btnAdd = document.querySelector("#add");
const btnEquals = document.querySelector("#equals");

btnAdd.addEventListener("click", () => {
    operator = "+";
    if(firstNumber === "") {
        firstNumber = Number(display.textContent);
    } else if(secondNumber === "") {
        secondNumber = Number(display.textContent);
    }
    display.textContent = "";
    console.log(firstNumber, secondNumber);
});
btnEquals.addEventListener("click", () => {
    
    console.log(firstNumber, secondNumber);
    if(secondNumber === "") {
    secondNumber = Number(display.textContent);
    }
    display.textContent = operate(Number(firstNumber),
                                  Number(secondNumber),
                                  operator);
    firstNumber = display.textContent;    
    console.log(firstNumber, secondNumber);
});

btnOne.addEventListener("click", () => {
    display.textContent += "1";
});
btnTwo.addEventListener("click", () => {
    display.textContent += "2";
});
btnThree.addEventListener("click", () => {
    display.textContent += "3";
});
btnFour.addEventListener("click", () => {
    display.textContent += "4";
});
btnFive.addEventListener("click", () => {
    display.textContent += "5";
});
btnSix.addEventListener("click", () => {
    display.textContent += "6";
});
btnSeven.addEventListener("click", () => {
    display.textContent += "7";
});
btnEight.addEventListener("click", () => {
    display.textContent += "8";
});
btnNine.addEventListener("click", () => {
    display.textContent += "9";
});
btnZero.addEventListener("click", () => {
    display.textContent += "0";
}); 