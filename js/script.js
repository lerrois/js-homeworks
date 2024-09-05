'use strict';

let elements = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const positivArray = elements.filter((element) => element > 0
);

let sum = 0;

positivArray.forEach(function(num) {
    sum += num;
});
console.log(positivArray.length + ', sum = ' + sum);
console.log('--------------------------------------------------------------');

console.log(elements.filter((element,index) => element < element)+index); // ?? min+his index
//Знайти мінімальний елемент масиву та його порядковий номер.

console.log('--------------------------------------------------------------');

console.log(elements.filter((element,index) => element > element)+index); // ?? max+his index
// Знайти максимальний елемент масиву та його порядковий номер.


console.log('--------------------------------------------------------------');

const negativArray = elements.filter((element, index) => element < 0)
console.log(negativArray.length);
console.log('--------------------------------------------------------------');

const positivParArray = elements.filter((element) => element > 0 && element%2 === 0)
);

const positivNeparArray = elements.filter((element) => element > 0 && element%2 > 0)
);
console.log(positivNeparArray.length);
console.log('--------------------------------------------------------------');
console.log(positivParArray.length);

console.log('--------------------------------------------------------------');
let sum2 = 0;

positivParArray.forEach(function(num) {
    sum2 += num;
});
console.log(sum2);
console.log('--------------------------------------------------------------');

let sum3 = 0;

positivNeparArray.forEach(function(num) {
    sum3 += num;
});
console.log(sum3);
console.log('--------------------------------------------------------------');

let multi = 0;

positivArray.forEach(function(num) {
    multi *= num;
});
console.log(multi);
console.log('--------------------------------------------------------------');

//Знайти найбільший серед елементів масиву, остальні обнулити.