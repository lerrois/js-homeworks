'use strict';

const a = 20;

for (let i = 0; i < 3; i++) {
  var j = 10;
  alert(i + j);
  console.log(a);
}
console.log(a);
console.log(j);
console.log(i);

// eslint-disable-next-line max-len
// Хойстинг поднимает переменную const обьявленную глобально вверх файла остальные переменные поднимаются внутри цикла фор
// далее,  переменная а выводится в консоль так как обьявлена глобально
// eslint-disable-next-line max-len
// Консоль лог не работает для i так как она обьявлена в цикле for который имеет темпорал дед зон вокруг себя
// eslint-disable-next-line max-len
// но так как j обявлена с помощью var темпорал дед зон на нее не действует и в консоль лог она выводится



