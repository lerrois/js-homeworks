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

const greeting = `Hi, ${name}`
alert(greeting)

const numericAge = Number(age);
const nextAge = numericAge + 1
console.log(nextAge)

const isAdult = numericAge >= 18
console.log(isAdult)