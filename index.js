let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteDigit() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key.match(/[0-9+\-*/.=]|Backspace/)) {
        if (key === 'Backspace') {
            deleteDigit();
        } else if (key === '=') {
            calculateResult();
        } else {
            appendToDisplay(key);
        }
    }
});