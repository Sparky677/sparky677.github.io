WebFont.load({
  google: {
    families: [
       'Quicksand', 'sans-serif'
    ]
  }
});

let lastUpdate = document.lastModified;
var d = new Date();
var n = d.getFullYear();
function lastUpdated() {
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Caleb D. Holland | Washington | ";
}
function callFuncts() {
  lastUpdated();
}