'use strict';

const div = document.createElement('div');
div.innerHTML = 'Hello World!';

const divAppers = () => {
  document.body.append(div);
};

const divDisappears = () => {
  document.body.delete(div);
};

document.addEventListener('mouseover', divAppers);
document.addEventListener('mouseout', divDisappears);
