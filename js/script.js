'use strict';

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
