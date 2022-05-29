//!  creating an object to help us keep track of these values
const calculater = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

updateDisplay()

const keys = document.querySelectorAll('.keys');
keys.forEach((e) => {
    e.addEventListener('click', (event) => {
        // access the click elements
        const { target } = event
        const { value } = target
        // console.log(target.innerText);
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                handelOperator(value)
                break
            case '.':
                inputDecimal(value)
                break
            case 'all-clear':
                resultCalculator()
                break
            default:
                if (Number.isInteger(parseFloat(value))) {
                    inputDigit(value)
                }
        }
        if (target.classList.contains('operator')) {
            // console.log(calculater);
            // console.log('operator', target.innerText);
            handelOperator(target.innerText)
            updateDisplay()
            return;
        }
        if (target.classList.contains('decimal')) {
            // console.log('decimal', target.innerText);
            inputDecimal(target.innerText)
            updateDisplay()
            return;
        }

        if (target.classList.contains('all-clear')) {
            // console.log('clear', target.innerText);
            resultCalculator()
            updateDisplay()
            return;
        }
        if (target.classList.contains('delete')) {
            // console.log('delete', target.innerText);
            return;
        }
        // console.log('digit', target.innerText);

        inputDigit(target.innerText)
        updateDisplay()
    });

})
//  update Display function
function updateDisplay() {
    // select the element with class
    const display = document.getElementById('calculateText')
    // update the value of element
    display.innerHTML = calculater.displayValue
}

// input Digit function
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculater
    if (waitingForSecondOperand === true) {
        calculater.displayValue = digit
        calculater.waitingForSecondOperand = false
    } else {
        // overwrite displayValue
        calculater.displayValue = displayValue === '0' ? digit : displayValue + digit
    }
    // console.log(calculater);
}

// input Decimal function
function inputDecimal(dot) {
    if (calculater.waitingForSecondOperand === true) {
        calculater.displayValue = '0'
        calculater.waitingForSecondOperand = false
        return
    }
    if (!calculater.displayValue.includes(dot)) {
        calculater.displayValue += dot
    }
}

function handelOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculater
    // to floating-point number
    const inputValue = parseFloat(displayValue)

    if (operator && calculater.waitingForSecondOperand) {
        calculater.operator = nextOperator
        return
    }
    // check is not a `NaN` value
    if (firstOperand === null && isNaN(inputValue)) {
        calculater.firstOperand = inputValue
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator)
        calculater.displayValue = String(result)
        calculater.firstOperand = result
    }
    calculater.waitingForSecondOperand = true
    calculater.operator = nextOperator
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand
    } else if (operator === '-') {
        return firstOperand - secondOperand
    } else if (operator === '*') {
        return firstOperand * secondOperand
    } else if (operator === '/') {
        return firstOperand / secondOperand
    }
    return secondOperand
}
function resultCalculator() {
    calculater.displayValue = '0'
    calculater.firstOperand = null
    calculater.waitingForSecondOperand = false
    calculater.operator = null
}