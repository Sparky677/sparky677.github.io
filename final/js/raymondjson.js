const dataURL = "https://sparky677.github.io/final/json/raymond.json"


fetch(dataURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (businessData) {
    console.log(businessData);
    for (i = 0; i < 7; i++) {
      business=i;
      console.log(businessData.businesses[business]);
      let card=document.createElement('section');
      let name = document.createElement('h2');
      let contact=document.createElement('p');
      let logobox=document.createElement('figure');
      let logo=document.createElement('img');
      let ref=document.createElement('a');

      card.className="block";
  
      name.textContent = businessData.businesses[business].name;

      contact.textContent=businessData.businesses[business].contact;

      logo.src=businessData.businesses[business].logo;
      logo.alt="logo";
      ref.href=businessData.businesses[business].link;
      ref.appendChild(logo);
      logobox.appendChild(logo);

      card.appendChild(name);
      card.appendChild(contact);
      card.appendChild(logobox);
      document.querySelector('#directory').appendChild(card);
    }
  });