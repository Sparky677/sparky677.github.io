const d=new Date();
const y=d.getDay();

const weekday=new Array(7);

weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

const cityid="5604473"
const APPID="3113faef71a1cef9cdb5a6d8f8cb88c7"

const apiURL=`https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`
const apiURL2=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`


fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {

    //get rid of these later
    document.getElementById("place").innerHTML=weatherData.name;
    document.getElementById("currentTemp").innerHTML=weatherData.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherData.wind.speed;
    const icon_path = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById("weather_icon").src=icon_path;
    //garbage ends here


    });

    fetch(apiURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {
    console.log(weatherData);
    const todayNumber=d.getDay();

    let forecastDay=todayNumber;

    let forecast=weatherData.list;
    console.log(forecast);


    for (i=0; i<forecast.length; i++){
      var time=forecast[i].dt_txt;
      if (time.includes('00:00:00')) {
        forecastDay+=1
        if (forecastDay===7) {
          forecastDay=0;
        }
        let card=document.createElement('section');

        let dayName=document.createElement('span');
        dayName.textContent=weekday[forecastDay]

        let temp=document.createElement('p');
        temp.textContent=weatherData.list[i].main.temp+"°";

        let icon=document.createElement('img');
        let iconcode=weatherData.list[i].weather[0].icon;
        let iconpath="https://openweathermap.org/img/wn/"+iconcode+".png"
        icon.src=iconpath;

        card.appendChild(dayName);
        card.appendChild(temp);
        card.appendChild(icon);

        document.querySelector('div.cards').appendChild(card);
      }


    }


    });