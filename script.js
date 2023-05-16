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

function reset() {
    operator = "";
    firstNumber = "";
    secondNumber = "";
    display.textContent = "";
}

function readyForInput(){
    operator = "";
    secondNumber = "";
}

function evaluate() {
    if(secondNumber === ""){ return; }
    let result = "";
    result = operate(Number(firstNumber), Number(secondNumber), operator);
    firstNumber = result;   
    display.textContent = result;
    readyForInput();
}

function updateResultDisplay() {
    
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
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEquals = document.querySelector("#equals");

const btnReset = document.querySelector("#reset");

btnAdd.addEventListener("click", () => {
    if (firstNumber === "") { return; }
    else if(secondNumber !== "") {
        evaluate();
    }
    if (operator === "") { 
        operator = "+"; 
        display.textContent += " + ";
    }
});
btnSubtract.addEventListener("click", () => {
    if (firstNumber === "") { return; }
    else if(secondNumber !== "") {
        evaluate();
    }
    if (operator === "") { 
        operator = "-"; 
        display.textContent += " - ";
    }
});
btnMultiply.addEventListener("click", () => {
    if (firstNumber === "") { return; }
    else if(secondNumber !== "") {
        evaluate();
    }
    if (operator === "") { 
        operator = "*"; 
        display.textContent += " * ";
    }
});
btnDivide.addEventListener("click", () => {
    if (firstNumber === "") { return; }
    else if(secondNumber !== "") {
        evaluate();
    }
    if (operator === "") { 
        operator = "/"; 
        display.textContent += " / ";
    }
});
btnEquals.addEventListener("click", () => {
    evaluate();
});

btnReset.addEventListener("click", reset);

btnOne.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "1";
    } else { secondNumber += "1"; }
    display.textContent += "1";
});
btnTwo.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "2";
    } else { secondNumber += "2"; }
    display.textContent += "2";
});
btnThree.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "3";
    } else { secondNumber += "3"; }
    display.textContent += "3";
});
btnFour.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "4";
    } else { secondNumber += "4"; }
    display.textContent += "4";
});
btnFive.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "5";
    } else { secondNumber += "5"; }
    display.textContent += "5";
});
btnSix.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "6";
    } else { secondNumber += "6"; }
    display.textContent += "6";
});
btnSeven.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "7";
    } else { secondNumber += "7"; }
    display.textContent += "7";
});
btnEight.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "8";
    } else { secondNumber += "8"; }
    display.textContent += "8";
});
btnNine.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "9";
    } else { secondNumber += "9"; }
    display.textContent += "9";
});
btnZero.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "0";
    } else { secondNumber += "0"; }
    display.textContent += "0";
}); 