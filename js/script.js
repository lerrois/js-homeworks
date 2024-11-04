'use strict';

function Student(name, lastName, year) {
  this.name = name;
  this.lastName = lastName;
  this.year = year;
  this.currentLesson = 0;
  this.presen = Array(10);
  this.marks = Array(10);
}

Student.prototype.present = function () {
  if (this.currentLesson > 10) throw new Error('only 10 lessons');
  this.presen[this.currentLesson] = true;
  this.currentLesson += 1;
};

Student.prototype.absent = function () {
  if (this.currentLesson > 10) throw new Error('only 10 lessons');
  this.presen[this.currentLesson] = false;
  this.currentLesson += 1;
};

Student.prototype.mark = function (value) {
  if (!this.presen[this.currentLesson - 1]) throw new Error('mark cannot be set for this lesson');
  this.marks[this.currentLesson - 1] = value;
};

Student.prototype._calcAvgMark = function () {
  const marksData = this.marks.reduce(
    (acc, item) => {
      if (typeof item === 'undefined') return acc;
      acc.marksCount += 1;
      acc.marksSum += item;
      return acc;
    },
    {
      marksCount: 0,
      marksSum: 0,
    },
  );
  return marksData.marksSum / marksData.marksCount;
};

Student.prototype._calcAvgAttd = function () {
  if (typeof this.presen[0] !== 'boolean') {
    return ('cannot calc because no lesson was created');
  }
  const visitedLessonsCount = this.presen.filter(Boolean).length;
  return visitedLessonsCount / this.currentLesson;
};

Student.prototype.summary = function () {
  const avgMark = Number(this._calcAvgMark().toFixed(1));
  const avgAttd = Number(this._calcAvgAttd().toFixed(1));

  if (avgAttd >= 0.9 && avgMark >= 9) {
    return 'Ух ти, який молодчинка!';
  }
  if (avgAttd < 0.9 && avgMark < 9) {
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

student1.present();
student1.mark(3);
student1.present();
student1.mark(5);
student1.present();
student1.mark(10);
student1.absent();

student2.present();
student2.mark(9);
student2.present();
student2.mark(10);
student2.present();
student2.mark(10);

student3.present();
student3.mark(9);

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
