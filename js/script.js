'use strict';

const a = Number(prompt('введіть число'));
const b = Number(prompt('введіть ступінь'));
if (typeof a === 'number' && b === 'number') {
  alert(a ** b);
} else {
  alert('error');
}
const exponentiation = function (num, exp) {
  const result = num ** exp;
  alert(result);
};
const mainFunction = function (callback) {
  const numer = Number(prompt('input number'));
  const expon = Number(prompt('input exponentiaton'));
  if (typeof numer !== 'number' || expon !== 'number') {
    alert('error');
  } else {
    return callback(numer, expon);
  }
};
mainFunction(exponentiation);
