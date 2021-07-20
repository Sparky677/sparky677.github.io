const dataURL="https://byui-cit230.github.io/weather/data/towndata.json"
var townID=document.getElementById("content").className;

if (townID=="=5604473") {
    //Preston, 6
    var town=6;
    console.log(6)
}
if (townID=="=5607916") {
    //Soda Springs, 0
    var town=0;
    console.log(0)
}
if (townID=="=5585000") {
    //Fish Haven, 2
    var town=2;
    console.log(2)
}

fetch(dataURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (townData) {
    console.log(townData);
    console.log(townData.towns[town]);
    let events=document.createElement('h2');
    events.textContent=("Events: ")
    for (i=0; i<townData.towns[town].events.length; i++) {
        let event=document.createElement('h6');
        event.textContent=townData.towns[town].events[i];
        events.append(event);
    }
    document.querySelector('#events').appendChild(events);
  });