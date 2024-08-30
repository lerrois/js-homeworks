'use strict';

function arithmeticalMean(array) {
  let iterator = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i + 1) {
    if (typeof array[i] === 'number') {
      sum += array[i];
      iterator += 1;
    }
  }

  return sum / iterator;
}

const arr = ['apple', 3, 'orange', 5, 8, 'cherry'];

const amean = arithmeticalMean(arr);
console.log(`серендє арифметичне =${amean}`);
