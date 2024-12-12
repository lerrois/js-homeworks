'use strict';

const answer = prompt('Insert your city');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${answer}&units=metric&appid=5d066958a60d315387d9492393935c19`)
  .then((response) => response.json())
  .then((data) => {
    if (data.cod !== 200) {
      throw Error('Could not find any weather');
    }
    const elem = document.getElementById('wrapper');
    const span = document.createElement('span');
    const { icon } = data.weather[0];
    const logo = `http://openweathermap.org/img/w/${icon}.png`;

    span.innerHTML = `temp = ${data.main.temp} <br> 
                   pressure = ${data.main.pressure} <br> 
                   description = ${data.main.description} <br>
                   humidity = ${data.main.humidity} <br>
                   speed = ${data.wind.speed} <br>
                   deg = ${data.wind.deg} <br>
                   <img src="${logo}">            
    `;
    elem.append(span);
  })
  .catch((err) => alert(err));
