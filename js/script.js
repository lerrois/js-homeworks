'use strict';

const user = {
  name: 'Lera',
  age: '30',

  get theName() {
    return `${this.name}`;
  },
  set theName(value) {
    this.name = value;
  },
//Сетер для age має перевіряти, щоб вік був числом від 0 до 120.
// Якщо значення не підходить, виведіть помилку в консоль і не змінюйте значення.

  get theAge() {
    return `${this.age}`;
  },
  set theAge(value) {
      if
    this.age = value;
  },
};

user.theName = 'Matilda';

user.theAge = '26';
