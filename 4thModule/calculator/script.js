let calculatorModule = (() => {
    let expression = []
    let map = new Map();

    const sum = (n1, n2) => n1 + n2
    const subt = (n1, n2) => n1 - n2
    const mult = (n1, n2) => n1 * n2
    const div = (n1, n2) => n2 !== 0 ? n1 / n2 : 'can\'t divide by zero'

    const operators = {
        '+': sum,
        '-': subt,
        '*': mult,
        '/': div
    }

    const saveOperations = (arr, result) => map.set(arr.join(''), result)

    const enter = expressionValue => {
        if (typeof expressionValue == 'number' || operators.hasOwnProperty(expressionValue)) {
            expression.push(expressionValue)
        } else {
            console.log('Invalid entry! It should be a number or a math operator!')
        }
    }

    const equals = () => {
        const [n1, op, n2] = expression;
        const result = operators[op](n1, n2)

        saveOperations(expression, result)
        expression = []
        return result;
    }

    const list = () => console.log(map);
    const reset = () => map.clear();

    return {
        expression,
        enter,
        equals,
        reset
        // TO-DO: implent
        // list,
        // reset
    }
})()

const calc = calculatorModule;
const number = document.querySelector('input[name="numberInput"]')
const form = document.querySelector('form')
const total = document.querySelector('span[name="total"]')
const equalsBtn = document.querySelector('#equals')
const error = document.querySelector('span[name="error"]')

const handleExpression = (op, num) => {
    let exp = calc.expression;
    if (op == null && exp.length < 2) {
        return error.innerHTML = '<span> Select operator! </span>'
    }
    calc.enter(num)
    if (op != null) {
        error.innerHTML = ''
        if (exp.indexOf(op.value) < 1) {
            calc.enter(op.value)
        }
    }
    clearForm();
}

const clearForm = () => {
    total.innerHTML = ' ';
    form.reset();
}

form.addEventListener('submit', function (etv) {
    const op = document.querySelector('input[name="operator"]:checked')
    etv.preventDefault();
    handleExpression(op, +number.value);
})

equalsBtn.addEventListener('click', function () {
    total.innerText = calc.equals();
    calc.reset();
})