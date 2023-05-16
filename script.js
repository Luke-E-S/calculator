/**ToDO
 * 
 * fix/remove = button
 * 
 * equal button could display result in main display, then
 * number buttons could check for result being equal to display
 * if so call reset
 * 
 * fix recuring of alternate symbols EG +*-/+/ should not be able to
 * be displayed
 */


let [firstNumber, secondNumber, operator, result] = ["", "", "", 0];

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
    resultDisplay.textContent = "";
    result = 0;
}

function readyForInput(){
    firstNumber = result;
    secondNumber = "";
}

function updateResultDisplay() {
    result = operate(Number(firstNumber), Number(secondNumber), operator);
    resultDisplay.textContent = result;
    /*console.log(firstNumber, secondNumber);*/
}
const display = document.querySelector("#display");
const resultDisplay = document.querySelector("#result");
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


/**OPERATORS EVENTS
 * operators are mainly used for checks and just
 * set the operator variable to the correct character
 * 
 * they also move some variables about but never actually
 * evaluate anything.
 * 
 */
/**ADDITION
 */
btnAdd.addEventListener("click", () => {
    const text = display.textContent;
    if( text.charAt(text.length - 2) === "+" ||
    firstNumber === "") {
    return;
}
    if (operator === "") { 
        /**we need to check this so we do not get a NaN
         * becaues there is no two numbers to evaluate
         */
        operator = "+"; 
        display.textContent += " + ";
    } else {
        operator = "+"; 
        display.textContent += " + ";
        firstNumber = result;
        secondNumber = "";
    }
});
btnSubtract.addEventListener("click", () => {
    const text = display.textContent;
    if( text.charAt(text.length - 2) === "-" ||
        firstNumber === "") {
        return;
    }
    if (operator === "") { 
        /**we need to check this so we do not get a NaN
         * becaues there is no two numbers to evaluate
         */
        operator = "-"; 
        display.textContent += " - ";
    } else {
        operator = "-"; 
        display.textContent += " - ";
        firstNumber = result;
        secondNumber = "";
    }
});
btnMultiply.addEventListener("click", () => {
    const text = display.textContent;
    if( text.charAt(text.length - 2) === "*" ||
        firstNumber === "") {
        return;
    }
    if (operator === "") { 
        /**we need to check this so we do not get a NaN
         * becaues there is no two numbers to evaluate
         */
        operator = "*"; 
        display.textContent += " * ";
    } else {
        operator = "*"; 
        display.textContent += " * ";
        firstNumber = result;
        secondNumber = "";
    }
});
btnDivide.addEventListener("click", () => {
    const text = display.textContent;
    if( text.charAt(text.length - 2) === "/" ||
        firstNumber === "") {
        return;
    }
    if (operator === "") { 
        /**we need to check this so we do not get a NaN
         * becaues there is no two numbers to evaluate
         */
        operator = "/"; 
        display.textContent += " / ";
    } else {
        operator = "/"; 
        display.textContent += " / ";
        firstNumber = result;
        secondNumber = "";
    }
});
btnEquals.addEventListener("click", () => {
    const text = display.textContent;
    if( text.charAt(text.length - 1) === "=" ||
        firstNumber === "") {
        return;
    } else { display.textContent += " ="; }
});

/**RESET BUTTON - Not hiding at all */
btnReset.addEventListener("click", reset);


/**NUMBER BUTTONS
 * clicking a number actually does some math and updates
 * the results display, it also has some logic to check
 * which variable to store the number in
 */
btnOne.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "1";
    } else { secondNumber += "1"; }
    display.textContent += "1";
    updateResultDisplay();
});
btnTwo.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "2";
    } else { secondNumber += "2"; }
    display.textContent += "2";
    updateResultDisplay();
    
});
btnThree.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "3";
    } else { secondNumber += "3"; }
    display.textContent += "3";
    updateResultDisplay();
});
btnFour.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "4";
    } else { secondNumber += "4"; }
    display.textContent += "4";
    updateResultDisplay();
});
btnFive.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "5";
    } else { secondNumber += "5"; }
    display.textContent += "5";
    updateResultDisplay();
});
btnSix.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "6";
    } else { secondNumber += "6"; }
    display.textContent += "6";
    updateResultDisplay();
});
btnSeven.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "7";
    } else { secondNumber += "7"; }
    display.textContent += "7";
    updateResultDisplay();
});
btnEight.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "8";
    } else { secondNumber += "8"; }
    display.textContent += "8";
    updateResultDisplay();
});
btnNine.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "9";
    } else { secondNumber += "9"; }
    display.textContent += "9";
    updateResultDisplay();
});
btnZero.addEventListener("click", () => {
    if(operator === "") {
        firstNumber += "0";
    } else { secondNumber += "0"; }
    display.textContent += "0";
    updateResultDisplay();
}); 