'use strict';

const myBind = (func, context, ...args) => (...newArgs) => {
  const allArgs = [...args, ...newArgs];
  return func(...allArgs.map((arg) => (typeof arg === 'function' ? arg.bind(context)() : arg)));
};

// Пример использования
const greet = (greeting, punctuation) => `${greeting}, ${this.name}${punctuation}`;

const person = { name: 'Olga' };

const boundGreet = myBind(greet, person, 'Hello');

console.log(boundGreet('!')); // "Hello, Olga!"
