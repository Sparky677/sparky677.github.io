apiURL="https://byui-cit230.github.io/weather/data/towndata.json"

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (townData) {
    console.log(townData);
    document.getElementById("hitemp").innerHTML=townData.main.temp;
    document.getElementById("wind").innerHTML=townData.wind.speed;
    document.getElementById("Humidity").innerHTML=townData.main.humidity;
  });