'use strict';

const appendHTMLElement = (parentElement = null, elementToAppend = null) => {
  if (!parentElement || !elementToAppend) return;
  parentElement.append(elementToAppend);
};

const generateTable = (a, b) => {
  const table = document.createElement('table');
  table.className = 'table';
  const tbody = document.createElement('tbody');
  table.append(tbody);
  let k = 1;
  for (let i = 1; i <= a; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j <= b; j++) {
      const td = document.createElement('td');
      td.innerHTML = `${k}`;
      k++;
      tr.append(td);
    }
    tbody.append(tr);
  }
  return table;
};

appendHTMLElement(document.body, generateTable(7,8));
