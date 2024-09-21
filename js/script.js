'use strict';

const func = () => {
  let previousInput = 0;
  let summa = 0;
  const sum = (a) => {
    summa = previousInput + a;
    previousInput = a;
    return summa;
  };
  return sum;
};

const sum = func();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
