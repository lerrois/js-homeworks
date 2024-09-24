'use strict';


const insertWordInto = (str) => {
  let pos = 0;
  let isStart = false;
  let hasResults = false;
  const newInsert = (string) => {
    if (str.length < 1) {
      return alert('Error!');
    }
    if (!hasResults) {
      pos = str.indexOf(' ', pos + 1);
    }
    if (pos === -1) {
      hasResults = true;
    } else {
      string = ` ${string}`;
    }
    if (hasResults && isStart === false) {
      pos = 0;
      isStart = true;
      string = `${string} `;
    } else if (hasResults && isStart === true) {
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
