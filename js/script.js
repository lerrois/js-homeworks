'use strict';

const getFactorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

const result = getFactorial(3);


const func = () => {

};
