'use strict';

function Student(name, lastName, year) {
  this.name = name;
  this.lastName = lastName;
  this.year = year;
  this.presen = Array(10);
  this.marks = Array(10);
}

Student.prototype.present = function () {
  const index = this.presen.findIndex((element) => (typeof element === 'undefined'));
  if (index !== -1) {
    this.presen[index] = true;
  }
};
Student.prototype.absent = function () {
  const index = this.presen.findIndex((element) => (typeof element === 'undefined'));
  if (index !== -1) {
    this.presen[index] = false;
  }
};

Student.prototype.mark = function (value) {
  const index = this.marks.findIndex((element) => (typeof element === 'undefined'));
  if (typeof value === 'number' && index !== -1) {
    this.marks[index] = value;
  }
};

Student.prototype.midmark = function () {
  const index = this.marks.findIndex((element) => (typeof element === 'undefined'));
  const initialValue = 0;
  const sumWithInitial = this.marks.reduce(
    function(accumulator, currentValue) {
      if (typeof currentValue !== 'undefined') {
        return accumulator + currentValue;
      }
    },
    initialValue,
  );
  return index !== 0 ? sumWithInitial / index : 0;
};

Student.prototype.summary = function () {
  const midMarkValue = this.midmark();

  const index = this.presen.findIndex((element) => (typeof element === 'undefined'));
  const initialValue = 0;
  const sumWithInitial = this.presen.reduce(
    function(accumulator, currentValue) {
      if (currentValue === true) {
        return accumulator + 1;
      }
    },
    initialValue,
  );
  const midpresent = index !== 0 ? index / sumWithInitial : 0;

  if (midpresent >= 0.9 && midMarkValue >= 9) {
    return 'Ух ти, який молодчинка!';
  }
  if (midpresent < 0.9 && midMarkValue < 9) {
    return 'Редька!';
  }
  return 'Нормально, але можна краще';
};

Student.prototype.age = function () {
  return new Date().getFullYear() - this.year;
};

const student1 = new Student('Nick', 'Cave', 1982);
const student2 = new Student('Alison', 'Moore', 1998);
const student3 = new Student('Erick', 'Peterson', 2002);

student1.mark(3);
student1.mark(5);
student1.mark(10);
student1.present();
student1.present();
student1.absent();

student2.mark(9);
student2.mark(10);
student2.mark(10);
student2.present();
student2.present();
student2.present();
console.log(student1.summary());
console.log(student2.summary());


