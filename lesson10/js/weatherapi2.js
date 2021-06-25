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
const desc="Weather icon"

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (weatherData) {
    console.log(weatherData);
    document.getElementById("hitemp").innerHTML=weatherData.main.temp;
    document.getElementById("wind").innerHTML=weatherData.wind.speed;
    document.getElementById("Humidity").innerHTML=weatherData.main.humidity;
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

        let dayName=document.createElement('h3');
        dayName.textContent=weekday[forecastDay]
        dayName.className="square";

        let temp=document.createElement('p');
        temp.textContent="High: "+weatherData.list[i].main.temp+"°";

        let icon=document.createElement('img');
        let iconcode=weatherData.list[i].weather[0].icon;
        let iconpath="https://openweathermap.org/img/wn/"+iconcode+".png"
        icon.src=iconpath;
        icon.setAttribute("alt", desc);

        card.appendChild(dayName);
        card.appendChild(temp);
        card.appendChild(icon);
        card.className='square';

        document.querySelector('section.cards').appendChild(card);

        WindChill();
      }


    }


    });