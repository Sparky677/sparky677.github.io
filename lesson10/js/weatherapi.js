const cityid="5604473"
const APPID="3113faef71a1cef9cdb5a6d8f8cb88c7"

const apiURL=`https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`
const apiURL2=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`


fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {
    console.log(weatherData);  // temporary checking for valid response and data parsing
    document.getElementById('current-temp').textContent = weatherData.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';  // note the concatenation
    const desc = weatherData.weather[0].description;  // note how we reference the weather array
    console.log(desc)
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    });
