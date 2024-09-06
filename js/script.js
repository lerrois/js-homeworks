'use strict';

const elements = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const positivArray = elements.filter((element) => element > 0);

let sum = 0;

positivArray.forEach((num) => {
  sum += num;
});
console.log(`${positivArray.length}, sum = ${sum}`);
console.log('--------------------------------------------------------------');

let min = elements[0];
elements.forEach((element) => (element < min ? min = element : min = min)); // ?? min+his index
console.log(`MIN = ${min}, ${elements.indexOf(min)}`);
console.log('--------------------------------------------------------------');

let max = elements[0];
elements.forEach((element) => (element > max ? max = element : max = max)); // ?? min+his index
console.log(`MAX = ${max}, ${elements.indexOf(max)}`);

console.log('--------------------------------------------------------------');

const negativArray = elements.filter((element) => element < 0);
console.log(negativArray.length);
console.log('--------------------------------------------------------------');

const positivParArray = elements.filter((element) => element > 0 && element % 2 === 0);
const positivNeparArray = elements.filter((element) => element > 0 && element % 2 > 0);

console.log(positivNeparArray.length);
console.log('--------------------------------------------------------------');
console.log(positivParArray.length);

console.log('--------------------------------------------------------------');
let sum2 = 0;

positivParArray.forEach((num) => {
  sum2 += num;
});
console.log(sum2);
console.log('--------------------------------------------------------------');

let sum3 = 0;
positivNeparArray.forEach((num) => {
  sum3 += num;
});
console.log(sum3);
console.log('--------------------------------------------------------------');

let multi = 1;

positivArray.forEach((num) => {
  multi *= num;
});
console.log(multi);
console.log('--------------------------------------------------------------');

// Знайти найбільший серед елементів масиву, остальні обнулити.
