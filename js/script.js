'use strict';

const factorialFunction = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorialFunction(n - 1);
};

const result = factorialFunction(3);


const func = () => {

};
