function WindChill(){
    hiTemp=document.getElementById("hitemp").innerHTML;
    wind=document.getElementById("wind").innerHTML;
    chill="N/A"
    if (hiTemp>=50 || wind<3) {
        document.getElementById("fholder").innerHTML="Wind Chill: "+chill+" - too hot"
    }
    else {
        console.log ("attempting wind chill")
        chill=35.74;
        chill+=(0.6215 * hiTemp);
        chill-=(35.75*Math.pow(wind,0.16));
        chill+=(0.4275*hiTemp*Math.pow(wind,0.16));
        chill=Math.round(chill);
        document.getElementById("chill").innerHTML=chill;
    }

}