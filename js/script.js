'use strict';

const myBind = (func, context, ...args) => (...newArgs) => {
  const allArgs = [...args, ...newArgs];
  return func(...allArgs);
};

// Пример
const greet = function (greeting) {
  return `${greeting}, ${this.name}`;
};

const person = { name: 'Olga' };

const boundGreet = myBind(greet, person, 'Hello');

console.log(boundGreet('!')); // "Hello, Olga!"
