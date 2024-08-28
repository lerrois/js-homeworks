'use strict';

function validate(str, num, charVal, boolVal) {
  if (!Number.isInteger(num)) {
    return 'Number of characters must be correct';
  }
  if (!(typeof str === 'string')) {
    return 'String must be correct';
  }
  if ((typeof boolVal !== 'boolean')) {
    return 'Position must be provided with boolean value.';
  }
  if ((typeof charVal !== 'undefined') && !(typeof charVal === 'string')) {
    return 'Char must be provided. Or not be provided at all';
  }
  if (charVal.length !== 1) {
    return 'Char must be provided with length 1.';
  }
  if (str.length > num && (typeof charVal === 'undefined')) {
    return 'Provide Char for this string length';
  }
  return null;
}

function padString(str, num, charVal, boolVal = false) {
  const isValid = validate(str, num, charVal, boolVal);
  if (typeof isValid === 'string') {
    return isValid;
  }

  const strlen = str.length;
  if (strlen > num) {
    return str.substring(0, num);
  }

  if (boolVal) {
    return charVal.repeat(num - strlen) + (str);
  }

  return str + charVal.repeat(num - strlen);
}

const result = padString('aaa', 5, 'e', true);
console.log(result);
