'use strict';

const div = document.createElement('div');
div.innerHTML = 'Hello World!';

const divAppers = () => {
  document.getElementsByTagName('span').append(div);
};

document.addEventListener('mouseover', divAppers());
document.addEventListener('mouseout', divAppers());
