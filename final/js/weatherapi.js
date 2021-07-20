const d = new Date();

const weekday = new Array(7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const lat = 46.687800
const lon = -123.733250
const APPID = "3113faef71a1cef9cdb5a6d8f8cb88c7"

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APPID}&units=imperial`
const desc = "Weather icon"

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (weatherData) {
    console.log(weatherData);
    document.getElementById("hitemp").innerHTML=weatherData.current.temp;
    document.getElementById("wind").innerHTML=weatherData.current.wind_speed;
    document.getElementById("Humidity").innerHTML=weatherData.current.humidity;
    let iconcode = weatherData.current.weather[0].icon;
    let iconpath = "https://openweathermap.org/img/wn/" + iconcode + ".png";
    document.getElementById("todayicon").src=iconpath;
  });

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {
    const todayNumber = d.getDay();

    let forecastDay = todayNumber;

    let forecast = weatherData.daily;

    for (i = 0; i < 3; i++) {
      forecastDay += 1
      if (forecastDay === 7) {
        forecastDay = 0;
      }
      let card = document.createElement('section');

      let dayName = document.createElement('h3');
      dayName.textContent = weekday[forecastDay]
      dayName.className = "square";

      let temp = document.createElement('p');
      temp.textContent = "High: " + forecast[i].temp.day + "°";

      let icon = document.createElement('img');
      let iconcode = forecast[i].weather[0].icon;
      let iconpath = "https://openweathermap.org/img/wn/" + iconcode + ".png";
      icon.src = iconpath;
      icon.setAttribute("alt", desc);

      card.appendChild(dayName);
      card.appendChild(temp);
      card.appendChild(icon);
      card.className = 'square';

      document.querySelector('div.cards').appendChild(card);
    }


  


  });