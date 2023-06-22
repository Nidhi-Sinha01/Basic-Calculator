// Get the calculator display element
let display = document.getElementById('result');

// Store the current value and the operator
let currentValue = '0';
let operator = '';

// Add an event listener to each button
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        // Check the type of button clicked
        switch (button.id) {
            case 'clear':
                currentValue = '0';
                operator = '';
                break;
            case 'backspace':
                if (currentValue.length > 1) {
                    currentValue = currentValue.slice(0, -1);
                } else {
                    currentValue = '0';
                }
                break;
            case 'percentage':
                currentValue = String(parseFloat(currentValue) / 100);
                break;
            case 'divide':
