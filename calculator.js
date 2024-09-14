// calculator.js

const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-num');
        const operator = e.target.getAttribute('data-operator');

        if (value) {
            displayValue += value;
            display.innerText = displayValue;
        } else if (operator) {
            displayValue += ` ${operator} `;
            display.innerText = displayValue;
        } else if (e.target.id === 'clear') {
            displayValue = '';
            display.innerText = displayValue;
        } else if (e.target.id === 'equals') {
            try {
                displayValue = eval(displayValue.replace(/\s/g, ''));
                display.innerText = displayValue;
            } catch {
                display.innerText = "Error";
                displayValue = '';
            }
        }
    });
});
