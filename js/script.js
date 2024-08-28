'use strict';

let str = '';
const max = 20;
for (let i = 10; i <= max; i += 1) {
  if (i === max) {
    str += i * i;
  } else {
    str += `${i}, `;
  }
}
console.log(str);

for (let i = 10; i <= 20; i += 1) {
  console.log(i * i);
}

for (let i = 1; i <= 10; i += 1) {
  console.log(i * 7);
}

let sum = 0;
for (let i = 1; i <= 15; i += 1) {
  sum += i;
}
console.log(sum);

let multiply = 1;
for (let i = 15; i <= 35; i += 1) {
  multiply *= i;
}
console.log(multiply);

let sum1 = 0;
const max1 = 500;
for (let i = 1; i <= max1; i += 1) {
  sum1 += i;
}
console.log(sum1 / max1);

let sum2 = 0;
// eslint-disable-next-line no-plusplus
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log(sum2);

// eslint-disable-next-line no-plusplus
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

const num = 100;
let sumParDel = 0;
let qtyParDel = 0;
for (let i = 1; i <= num; i += 1) {
  if (num % i === 0) {
    console.log(i);
    if (i % 2 === 0) {
      qtyParDel += 1;
      sumParDel += i;
    }
  }
}
console.log(`Кількість парних дільників = ${qtyParDel}`);
console.log(`Cума парних дільників = ${sumParDel}`);

for (let i = 2; i <= 10; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    console.log(i * j);
  }
}
