function openFolio(folioName) {
    var i;
    var x = document.getElementsByClassName("portfolio");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      console.debug(x[i])  ;
    }
    document.getElementById(folioName).style.flexDirection = "column";
    
    document.getElementById(folioName).style.display = "flex"; 
    console.debug(document.getElementById(folioName).style.display);
    document.getElementById("buttons").style.paddingBottom =  '10px';
    document.getElementById("title").textContent = folioName + '!';
    
}