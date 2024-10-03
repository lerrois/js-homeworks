'use strict';

const firstDiv = document.createElement('div');
firstDiv.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const secondDiv = document.createElement('div');
secondDiv.innerHTML = 'Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const thirdDiv = document.createElement('div');
thirdDiv.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';

const appendElement = (elementToAppend) => {
  document.body.append(elementToAppend);
};

appendElement(firstDiv);

const secondDivAppend = () => {
  appendElement(secondDiv);
};
const thirdDivAppend = () => {
  appendElement(thirdDiv);
};

const secondDivAdded = () => {
  document.addEventListener('DOMContentLoaded', secondDivAppend);
};
const thirdDivAdded = () => {
  document.addEventListener('DOMContentLoaded', thirdDivAppend);
};
secondDivAdded();
thirdDivAdded();

const div = document.createElement('div');
div.innerHTML = 'Hello World!';
div.classList.add('short');

const divAppers = () => {
  document.body.append(div);
};

const divDisappears = () => {
  div.remove();
};

document.addEventListener('mouseover', divAppers);
document.addEventListener('mouseout', divDisappears);
