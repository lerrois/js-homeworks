'use strict';


const hoursInput = prompt('Please, input hours quantity to convert to seconds')

if (hoursInput === null || hoursInput === '' || isNaN(Number(hoursInput))) {
    alert('It is not a joke. Please, enter a valid hours number');
}
else {
    const timeInSeconds = Number(hoursInput) * 60 * 60;
    alert(`${hoursInput} hours = ${timeInSeconds} seconds`);
}
