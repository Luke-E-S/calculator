let [firstNumber, secondNumber, operator] = [0, 0, ""];

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