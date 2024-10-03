'use strict';

// Згенерувати div через js
// Вставити його не сторінку
// накинути івенти
// написати функціями щоб можна було використовувати
// протестувати на 3х таких дівах. (Уважно дивись на івент лісенери )

const firstDiv = document.createElement('div');
firstDiv.innerHTML = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const secondDiv = document.createElement('div');
secondDiv.innerHTML = 'Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const thirdDiv = document.createElement('div');
thirdDiv.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';

const appendElement = (elementToAppend) => {
  document.body.append(elementToAppend);
};

appendElement(firstDiv);

const secondDivAdded = () => {
  appendElement(secondDiv);
};

const thirdDivAdded = () => {
  appendElement(thirdDiv);
};

document.addEventListener('DOMContentLoaded', secondDivAdded);
document.addEventListener('DOMContentLoaded', thirdDivAdded);

const div = document.createElement('div');
div.innerHTML = 'Hello World!';

const divAppers = () => {
  document.body.append(div);
};

const divDisappears = () => {
  div.remove();
};

document.addEventListener('mouseover', divAppers);
document.addEventListener('mouseout', divDisappears);
