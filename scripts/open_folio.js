function openFolio(folioName) {
    var i;
    var x = document.getElementsByClassName("portfolio");
    var folio = document.getElementById(folioName);
    var wasShowing = folio.style.display;

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      // console.debug(x[i]);
    }

    var folio = document.getElementById(folioName);
    // folio.style.flexDirection = "column";
    console.log(wasShowing);

    if (wasShowing == "grid") {
      folio.style.display = "none";
      document.getElementById("title").textContent = 'portfolio';
      // console.log('hide!')
    } else {
      folio.style.display = "grid";
      // console.log(titleText);
      document.getElementById("title").textContent = folioName + '!';
    }
    
    
    
}