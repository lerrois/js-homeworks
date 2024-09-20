'use strict';

const myBind = (func, context, ...args) => {
  this = context;
  const allArgs = [...args];
  return func(...allArgs);
};

// Приклад
const greet = function (greeting) {
  console.log(greeting);
  return `${greeting}, ${this.name}`;
};

const person = { name: 'Olga' };

const boundGreet = myBind(greet, person, 'Hello');

console.log(boundGreet('!')); // "Hello, Olga!"
