const json = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(json)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name=='Preston' || towns[i].name=="Soda Springs" || towns[i].name=="Fish Haven") {
      let card = document.createElement('div');
      let h2 = document.createElement('h2');
      let p1=document.createElement('p');
      let p2=document.createElement('p');
      let p3=document.createElement('p');
      let p4=document.createElement('p');

      let photo = document.createElement('div');
      let image=document.createElement('img');

      h2.textContent = towns[i].name;
      p1.textContent=towns[i].motto;
      p2.textContent="Founded in "+towns[i].yearFounded;
      p3.textContent="Current population: "+towns[i].currentPopulation;
      p4.textContent="Average rainfall: "+towns[i].averageRainfall+" in.";

      image.setAttribute('src', towns[i].photo);
      image.setAttribute('alt', (towns[i].name+" image"))

      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(image);

      photo.appendChild(image)
      
        //console.log (card);
        //console.log(image);
      document.querySelector('section.locations').appendChild(card);
      document.querySelector('section.locations').appendChild(photo);
    }}

  });