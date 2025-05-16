function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let multiplyResult = multiply(num1, num2);
        let additionResult = add(num1, num2);
        let substractionResult = substract(num1, num2);
        let divisionResult = divide(num1, num2);

        let result = [multiplyResult, additionResult, substractionResult, divisionResult];

        // Display the result
        displayResult(result);
    } else {
            displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}

function substract(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a - b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<ul>
        <li>Multiplication: ${result[0]}</li>
        <li>Addition: ${result[1]}</li>
        <li>Substraction: ${result[2]}</li>
        <li>Division: ${result[3]}</li>
    </ul>`;
}
        