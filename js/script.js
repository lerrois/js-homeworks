'use strict';

const user = {
  firstName: 'Olga',
  lastName: 'Shwartz',
};

const getFullName = () => {
  return `${this.firstName} ${this.lastName}`;
};
const applyFunc = (func, context, ...args) => {
  let result = null;
  context.func = func;
  result = context.func(...args);
  delete context.func;

  return result;
};

const myBind = (func = null, context = undefined, args = []) => {
  if (!func) return undefined;
  return function () {
    return applyFunc(func, context, ...args);
  };
};
const bindFunc = myBind(getFullName, user);
console.log(bindFunc);
console.log(bindFunc());
