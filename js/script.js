'use strict';

const arrayLength = Number(prompt('введіть довжину масиву'));
const array = [];
const inputData = (arrLeng) => {
  for (let i = 0; i < arrLeng; i++) {
    array[i] = prompt('введіть число');
  }
  return array;
};
const arrNew = inputData(arrayLength);
alert(arrNew);

alert(arrNew.sort((a, b) => a - b));

alert(arrNew.splice(2, 3));
