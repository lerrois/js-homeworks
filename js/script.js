'use strict';

// const answer = prompt('Insert your city');
// const answer = 'KYIV111';
const answer = 'KYIV';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${answer}&units=metric&appid=5d066958a60d315387d9492393935c19`)
  .then((response) => response.json())
  .then((data) => {
    if (data.cod !== 200) {
      throw Error('Could not find any weather');
    }
    console.log(`temp = ${data.main.temp}`);
    console.log(`pressure = ${data.main.pressure}`);
    console.log(`description = ${data.main.description}`);
    console.log(`humidity = ${data.main.humidity}`);
    console.log(`speed = ${data.wind.speed}`);
    console.log(`deg = ${data.wind.deg}`);
    const { icon } = data.weather[0];
    console.log(`http://openweathermap.org/img/w/${icon}.png`);
  })
  .catch((err) => alert(err));


