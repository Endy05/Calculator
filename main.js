const output = document.querySelector('.output');
const container = document.querySelector('.buttons');

let text = ''; 
let currentOperation = ''; 
let resultDisplayed = false;


container.addEventListener('click', (event) => {
    if (event.target.classList.contains('gray')) {
        if (resultDisplayed) {
            
            text = '';
            resultDisplayed = false;
        }
        text += event.target.textContent; 
        output.textContent = text; 
    }

    if (event.target.classList.contains('operation')) {
        if (resultDisplayed) {
            resultDisplayed = false; 
        }
        if (text !== '' && !isNaN(text[text.length - 1])) {
            currentOperation = event.target.textContent; 
            text += ` ${currentOperation} `; 
            output.textContent = text; 
        }
    }

    if (event.target.classList.contains('ac')) {
        text = ''; 
        output.textContent = ''; 
    }

    if (event.target.classList.contains('result')) {
        const expression = text.split(' '); 
        if (expression.length === 3) {
            const num1 = parseFloat(expression[0]);
            const operation = expression[1];
            const num2 = parseFloat(expression[2]);

            const result = operator(num1, num2, operation);
            text = result.toString(); 
            output.textContent = text; 
            resultDisplayed = true; 
        }
    }
});


function sum(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function subsum(num1, num2) {
    return num1 * num2;
}

function del(num1, num2) {
    if (num2 === 0) {
        return 'Error'; 
    }
    return num1 / num2;
}


function operator(num1, num2, operation) {
    switch (operation) {
        case '+':
            return sum(num1, num2);
        case '-':
            return minus(num1, num2);
        case '*':
            return subsum(num1, num2);
        case '/':
            return del(num1, num2);
        default:
            return 'Invalid operation';
    }
}
