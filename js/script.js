'use strict';

const myBind = (func, context, ...args) => (...newArgs) => {
  // Создаем массив аргументов, объединяя старые и новые
  const allArgs = [...args, ...newArgs];
  // Вызываем функцию с указанным контекстом
  return func(...allArgs);
};

// Пример использования
const greet = function(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
};

const person = { name: 'Olga' };

const boundGreet = myBind(greet, person, 'Hello');

console.log(boundGreet('!')); // "Hello, Olga!"
