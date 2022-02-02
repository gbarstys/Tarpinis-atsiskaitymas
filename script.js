"use strict";

// Navigation menu 
function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

// container 2 pirmi tabaiz
    function changestyle(x) {
        x.classList.add("tabhover");
    }
    function changeback(x) {
        x.classList.remove("tabhover");
    }