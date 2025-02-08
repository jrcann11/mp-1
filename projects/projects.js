function addNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    let result = num1 + num2;
    displayResult(result);
}

function subtractNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    let result = num1 - num2;
    displayResult(result);
}

function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    let result = num1 * num2;
    displayResult(result);
}

function divideNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    if (num2 === 0) {
        displayResult("Cannot divide by zero", true);
        return;
    }
    let result = num1 / num2;
    displayResult(result);
}

function powerNumbers() {
    let base = parseFloat(document.getElementById("first-number").value);
    let exponent = parseInt(document.getElementById("second-number").value);
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    displayResult(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.backgroundColor = "transparent";
}

function displayResult(result, isError = false) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);

    if (result < 0) {
        outputElement.style.backgroundColor = "red";
        outputElement.style.color = "white";
    } else {
        outputElement.style.backgroundColor = "transparent";
        outputElement.style.color = "black";
    }

    if (isError) {
        outputElement.style.backgroundColor = "yellow";
        outputElement.style.color = "black";
    }
}