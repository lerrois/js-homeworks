'use strict';

const postnumberIn = () => parseInt(prompt('Enter your post number'));

const fetchFunc = (value) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

async function getpost() {
  const numberinput = await postnumberIn();
  if (!isNaN(numberinput) && numberinput > 0 && numberinput <= 100) {
    await fetchFunc(numberinput);
  } else throw Error('Unable to get post number');
}
getpost();