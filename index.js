const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const dot = document.getElementById('dot');
const zero = document.getElementById('zero');
const reset = document.getElementsByClassName('reset');
const equal = document.getElementsByClassName('equal');
const del = document.getElementsByClassName('del');
const numbers = document.getElementById('numbers');

let emptyString = "";



function buttonClicked(some) {
    if (typeof emptyString == 'undefined') {
        emptyString = "";
    }
    emptyString += some.value
    numbers.innerHTML = emptyString;
}

function deleted() {
    emptyString = emptyString.slice(0, -1);
    if (emptyString == "") {
        numbers.innerHTML = 0;
    }
    else {
        numbers.innerHTML = emptyString;
    }
}

function resetAll() {
    emptyString = "";
    numbers.innerHTML = 0;
}



function evaluated() {
    try {
        emptyString = eval(emptyString);
        // console.log(typeof(emptyString));
        if (typeof emptyString == 'undefined') {
            numbers.innerHTML = 0;
        }
        else {
            if (emptyString % 1 !== 0) {
                emptyString = emptyString.toFixed(3);

            }
            emptyString = emptyString.toString();
            numbers.innerHTML = emptyString;

        }
    }
    catch (error) {
        console.log(error)
        numbers.innerHTML = "Error"
    }

}





