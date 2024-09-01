'use strict';

const a = prompt('введіть число');
const b = prompt('введіть ступінь');
alert(a ** b);

const exponentiation = function (num, exp) {
  const result = num ** exp;
  alert(result);
};

const mainFunction = function (callback) {
  const numer = prompt('input number');
  const expon = prompt('input exponentiaton');
  return callback(numer, expon);
};
mainFunction(exponentiation);
