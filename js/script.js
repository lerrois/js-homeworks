'use strict';

const array = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const removeElement = function (arr, item) {
  const result = arr.filter((word) => word !== item);
  return result;
};

console.log(removeElement(array, 'elite'));
