'use strict';

const getFactorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

const result = getFactorial(3);

console.log(result);
console.log(------------------------------------------------------------);

const pow = (num, degree) => {
  if (degree === 1) {
    return num;
  }
  return num * pow(num, degree - 1);
};

const res = pow(3, 4);
console.log(res);

console.log(------------------------------------------------------------);

const sum = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return sum(++num1, --num2);
};

const res1 = sum(3, 4);
console.log(res1);
