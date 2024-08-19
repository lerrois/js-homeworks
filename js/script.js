'use strict';

let numbers = ''
for (let i = 40; i <= 60; i++) {
    numbers += i/2 + ' '
}

console.log(numbers);


for (let i = 1; i <= 10; i++) {
    console.log(27 * i * 10 + ' ');
}


const n = prompt ('Введіть ціле число');

for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
        console.log(i);
    }
}

const n = prompt ('Введіть ціле число');
let simple = 'Simple'
for (let i = 2; i <= n-1; i++) {
    if (n % i === 0) {
        simple = 'Not Simple'
        break;
    }
}
console.log(simple)