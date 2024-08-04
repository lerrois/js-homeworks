'use strict';


const name = prompt('Enter your name')
const age = prompt('Enter your age')
const likesProgramming = confirm('Do you like programming?');

console.log(name)
console.log(age)
console.log(likesProgramming)

console.log(typeof name);
console.log(typeof age);
console.log(typeof likesProgramming);

let greeting = `Hi, ${name}`
alert(greeting)

let numericAge = Number(age);
let nextAge = numericAge + 1
console.log(nextAge)

let isAdult = numericAge >= 18
console.log(isAdult)