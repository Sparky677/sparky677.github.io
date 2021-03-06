

var date=new Date();
now=date.getTime();

function lastVisited() {
  let last=previous(0);
  let timeSince=(now-last);
  previous(now);
  days=(timeSince/86400000);
  rounded=Math.floor(days);
  if (rounded<1) {
    final="Last visited less than a day ago";
  }
  else if (rounded<=3650) {
    final="Last visited "+String(rounded)+" days ago";
  }
  else {
    final="Looks like this is your first visit!"
  }
  document.getElementById("visited").innerHTML=final;
}

function previous(time) {
  if (time!=0) {
    localStorage.setItem ("last", time)
  }
  else {
    lastVisit=localStorage.getItem("last")
    return lastVisit
  }
}

const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
      items.forEach((item)=> {
          if (item.isIntersecting) {
              loadImages(item.target);
              observer.unobserve(item.target);
          }
      });
  }, options);

  imagesToLoad.forEach((img) => {
      observer.observe(img);
  });

} else {
  imagesToLoad.forEach(img => {
      loadImages(img);
  });
}



function lastUpdated() {
  let lastUpdate = document.lastModified;
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Caleb D. Holland";
}


function callFuncts() {
  lastUpdated();
  lastVisited();
}

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("smallhide");
}

function dismissAlert() {
  document.getElementById("alert").classList.toggle("hide");
  document.getElementById("alert").classList.toggle("alert");
  
}

function checkName() {
  let name=document.getElementById("fname").value;
  isName=/\D/.test(name);
  isNumber=/\d/.test(name);
  length=name.length;
  if (isName==true && isNumber!=true && length>=5) {
    document.getElementById("fname").className="complete";
  }
  else {
    document.getElementById("fname").className="incomplete";
  }
}
try {
document.getElementById("fname").addEventListener("input", function(){
  checkName();
})}
catch{};
