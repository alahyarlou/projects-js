const result = document.getElementById('result'),
    calc = document.getElementById('calculateText')

let value = '0'
document.querySelectorAll('.keys').forEach((number) => {
    number.addEventListener('click', (e) => {
        result.innerText = ''
        let char = e.target.innerText
        if (value === '0' && !char.match(/[+*/.-]/gi)) {
            value = char
        } else {
            value += char
        }
        calc.innerText = value
    })
})
document.querySelector('.all-clear').addEventListener('click', () => {
    result.innerText = '0'
    calc.innerText = '0'
    value = '0'
})
document.querySelector('.delete').addEventListener('click', () => {
    value = value.substring(0, value.length - 1)
    if (value) {
        calc.innerText = value;
        if (!value.match(/[0-9]+[+-\/*]$/gi)) {
            try {
                calc.innerText = eval(value);
            } catch (error) {
                invalidExpression();
            }
        } else {
            result.innerText = "";
        }
    } else {
        calc.innerText = "0";
        result.innerText = "";
    }
})
document.getElementById('equl').addEventListener('click', () => {
    if (!value.match(/[0-9]+[+-\/*][+-\/*]+/gi)) {
        value = value.substring(0, value.length - 1)
    }

    if (!value.match(/[0-9]+[+-\/*]$/gi)) {
        try {
            result.innerText = eval(value)
        } catch (err) {
            invalidExpression()
        }
    }
})


function invalidExpression() {
    calc.innerText = "0";
    result.innerText = "Invalid Expression";
    value = "0";
}
