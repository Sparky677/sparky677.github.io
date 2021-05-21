let remove="remove";
document.getElementById("submit").addEventListener("click", function() {
  let chapter=document.getElementById("favchap").value;
  if (chapter !=="") {
    const newbtn=document.createElement("button");
    newbtn.innerHTML="\u274C";
    newbtn.addEventListener("click", function() {
      newbtn.parentElement.classList=remove;
    });

    const newli=document.createElement("li");
    newli.innerHTML=chapter;
    newli.appendChild(newbtn);
    

    document.getElementById("list").appendChild(newli);

    document.getElementById("favchap").value="";
  }
});

let lastUpdate = document.lastModified;
var d = new Date();
var n = d.getFullYear();
function lastUpdated() {
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Caleb D. Holland | Washington | ";
}

