'use strict';


let str = '';
const max = 20;
for (let i = 10; i <= max; i++) {
    if (i === max) {
        str += i*i
    } else {
        str += i + ', '
    }
}
console.log(str)


for (let i = 10; i <= 20; i++) {
    console.log(i*i)
}


for (let i = 1; i <= 10; i++) {
    console.log(i * 7)
}


let sum = 0
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum)


let multiply = 1
for (let i = 15; i <= 35; i++) {
    multiply *= i;
}
console.log(multiply)


let sum = 0
const max = 500;
for (let i = 1; i <= max; i++) {
    sum += i;
}
console.log(sum / max)


let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum)


for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

 const num = 100;
  let sum_par_del = 0;
  let qty_par_del = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          console.log(i)
          if (i % 2 === 0) {
              qty_par_del++
              sum_par_del += i
          }
      }
  }
  console.log('Кількість парних дільників = ' + qty_par_del)
  console.log('Cума парних дільників = ' + sum_par_del)


for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i * j)
    }
}