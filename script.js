'use strict'

let firstNumberValue = +prompt('Enter your first number');
let secondNumberValue = +prompt('Enter your second number');
if (Math.abs(firstNumberValue - secondNumberValue) < 5) {
    do {
        firstNumberValue = +prompt('Enter your first number');
        secondNumberValue = +prompt('Enter your second number');
    } while (Math.abs(firstNumberValue - secondNumberValue) < 5);
    for (let i = firstNumberValue; i <= secondNumberValue; i++) {
        console.log(i);
    };
    for (let i = firstNumberValue; i >= secondNumberValue; i--) {
        console.log(i);
    };
} else {
    for (let i = firstNumberValue; i <= secondNumberValue; i++) {
        console.log(i);
    };
    for (let i = firstNumberValue; i >= secondNumberValue; i--) {
        console.log(i);
    };
};



let pinCode;
let pin = 123;
let attempts = 0;
let pucCode;
let puc = 99;
let pucCodeAttempts = 0;
while (pinCode != pin && attempts < 3) {
    pinCode = prompt('enter your PIN');
    ++attempts
    if (attempts === 1 && pinCode != pin) {
        alert('two attempts left')
    }
    else if (attempts === 2 && pinCode != pin) {
        alert('one attempts left')
    }
    else if (attempts === 3 && pinCode != pin) {
        alert('invalid PIN-code')
        while (pucCode != puc && pucCodeAttempts < 3) {
            pucCode = prompt('enter your PUC');
            ++pucCodeAttempts
            if (pucCodeAttempts === 1 && pucCode != puc) {
                alert('two attempts left')
            }
            else if (pucCodeAttempts === 2 && pucCode != puc) {
                alert('one attempts left')
            }
            else if (pucCodeAttempts === 3 && pucCode != puc) {
                alert('invalid PUC-code')
            }
        }
    }
}
if (pinCode == pin || pucCode == puc) {
    alert('welcome')
}