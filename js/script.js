'use strict';

const appendHTMLElement = (parentElement = null, elementToAppend = null) => {
  if (!parentElement || !elementToAppend) return;
  parentElement.append(elementToAppend);
};

const generateTable = () => {
  const tableSize = 10;
  const table = document.createElement('table');
  table.className = 'table';
  const tbody = document.createElement('tbody');
  table.append(tbody);
  for (let i = 0; i <= tableSize; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j <= tableSize; j++) {
      const td = document.createElement('td');
      td.innerHTML = `${j}`;
      tr.append(td);
    }
    tbody.append(tr);
  }
  return table;
};

appendHTMLElement(document.body, generateTable());
