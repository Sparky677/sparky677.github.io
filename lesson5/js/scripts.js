let lastUpdate = document.lastModified;
var d = new Date();
var n = d.getFullYear();
function lastUpdated() {
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Caleb D. Holland";
}

function satbanner() {
  var day=new Date();
  var now=day.getDay();
  if (now==6) {
    document.getElementById("date").classList="today";
  }
}

function callFuncts() {
  lastUpdated();
  satbanner();
}

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}