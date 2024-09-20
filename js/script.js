'use strict';


const insertWordInto = (str) => {
  let pos = 0;
  let isStart = false;
  let noResults = false;
  const newInsert = (string) => {
    if (string === null || str.length < 1) {
      return alert('Error!');
    }
    if (!noResults) {
      pos = str.indexOf(' ', pos + 1);
    }
    if (pos === -1) {
      noResults = true;
    } else {
      string = ` ${string}`;
    }
    if (noResults && isStart === false) {
      pos = 0;
      isStart = true;
      string = `${string} `;
    } else if (noResults && isStart === true) {
      pos = str.length;
    }

    let array = str.split('');
    array.splice(pos, 0, string);
    return array.join('');
  };
  return newInsert;
};
const insert = insertWordInto('hello world');
const result = insert('Odesa');
console.log(result);
const secondResult = insert('Odesa');
console.log(secondResult);
const thirdResult = insert('Odesa');
console.log(thirdResult);
