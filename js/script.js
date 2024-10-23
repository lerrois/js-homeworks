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
  get theAge() {
    return `${this.age}`;
  },
  set theAge(value) {
    if (value !== '' && Number(value) < 120 && Number(value) >= 0) {
      this.age = value;
    } else throw new Error('age must be a number from 0 to 120');
  },
};

user.theName = 'Matilda';
user.theAge = '20';
console.log(user);
