function convert() {
    const inputType = document.getElementById('inputType').value;
    const inputNumber = document.getElementById('inputNumber').value;
    let decimalValue = 0;
    switch (inputType) {
        case 'decimal':
            decimalValue = parseInt(inputNumber, 10);
            break;
        case'binary':
            decimalValue = parseInt(inputNumber, 2);
            break;
        case 'octal':
            decimalValue = parseInt(inputNumber, 8);
            break;
        case 'hexadecimal':
            decimalValue = parseInt(inputNumber, 16);
            break;
        default:
            decimalValue = NaN;
            break;
    }
    if (isNaN(decimalValue)) {
        alert('Invalid number');
    } else {
        document.getElementById('decimal-result').textContent = decimalValue.toString(10);
        document.getElementById('binary-result').textContent = decimalValue.toString(2);
        document.getElementById('octal-result').textContent = decimalValue.toString(8);
        document.getElementById('hexadecimal-result').textContent = decimalValue.toString(16).toUpperCase();
    }

    
}

function reset(type) {
    if (type === 'converter') {
        document.getElementById('inputType').value = 'decimal';
        document.getElementById('inputNumber').value = '';
        document.getElementById('decimal-result').textContent = '-';
        document.getElementById('binary-result').textContent = '-';
        document.getElementById('octal-result').textContent = '-';
        document.getElementById('hexadecimal-result').textContent = '-';
    } else if (type === 'arithmetic') {
        document.getElementById('firstNumber').value = '';
        document.getElementById('secondNumber').value = '';
        document.getElementById('operator').value = '+';
        document.getElementById('arithmetic-decimal-result').textContent = '-';
        document.getElementById('arithmetic-binary-result').textContent = '-';
        document.getElementById('arithmetic-octal-result').textContent = '-';
        document.getElementById('arithmetic-hexadecimal-result').textContent = '-';
    }
}

// function calculate(){
//     const inputType = document.getElementById('inputType').value;
//     let firstNumber = document.getElementById('firstNumber').value;
//     let secondNumber = document.getElementById('secondNumber').value;
//     const operator = document.getElementById('operator').value;
//     let result = 0;
//     switch (inputType) {
//         case 'decimal':
//             firstNumber = parseInt(firstNumber, 10);
//             secondNumber = parseInt(secondNumber, 10);
//             break;
//         case 'binary':
//             firstNumber = parseInt(firstNumber, 2);
//             secondNumber = parseInt(secondNumber, 2);
//             break;
//         case 'octal':
//             firstNumber = parseInt(firstNumber, 8);
//             secondNumber = parseInt(secondNumber, 8);
//             break;
//         case 'hexadecimal':
//             firstNumber = parseInt(firstNumber, 16);
//             secondNumber = parseInt(secondNumber, 16);
//             break;
//         default:
//             break;
//     }
//     switch (operator) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;  
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             result = firstNumber / secondNumber;
//             break;
//         default:
//             break;
//     }

//         document.getElementById('resultOperator').textContent = result;
// }

function calculate() {
    let firstNumber = document.getElementById('firstNumber').value.trim();
    let secondNumber = document.getElementById('secondNumber').value.trim();
    const operator = document.getElementById('operator').value;
    let result = 0;

    function detectBase(num) {
        if (/^0b[01]+$/i.test(num)) return 2; 
        if (/^0o[0-7]+$/i.test(num)) return 8;
        if (/^0x[0-9a-f]+$/i.test(num)) return 16;
        if (/^[0-9]+$/i.test(num)) return 10; 
        if (/^[0-9a-f]+$/i.test(num)) return 16; 
        return NaN; 
    }

    const base1 = detectBase(firstNumber);
    const base2 = detectBase(secondNumber);
    firstNumber = parseInt(firstNumber, base1);
    secondNumber = parseInt(secondNumber, base2);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Invalid number');
        return;
    }

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;  
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert('Division by zero is not allowed');
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    document.getElementById('arithmetic-decimal-result').textContent = result.toString(10);
    document.getElementById('arithmetic-binary-result').textContent = result.toString(2);
    document.getElementById('arithmetic-octal-result').textContent = result.toString(8);
    document.getElementById('arithmetic-hexadecimal-result').textContent = result.toString(16).toUpperCase();
}
