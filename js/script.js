'use strict';

const array = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const removeElement = function (arr, item) {
  return arr.filter((word) => word !== item);
};
console.log(removeElement(array, 'elite'));
