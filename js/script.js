'use strict';

const num1 = prompt(`Please enter a 1st number`)
const num2 = prompt(`Please enter a 2nd number`)
const num3 = prompt(`Please enter a 3rd number`)

if (num1 === null || isNaN(Number(num1)) || num2 === null || isNaN(Number(num2)) || num3 === null || isNaN(Number(num3))) {
    alert('You entered not a valid number')
}
else  {
    alert((Number(num1) + Number(num2) + Number(num3)) / 3)
}

