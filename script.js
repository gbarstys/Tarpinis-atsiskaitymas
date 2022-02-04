// window.onload = function () {
//     $(document).ready(function () {
//         function changephotostyle(x) {
//             x.classList.add("tabfthover");
//             var photo = document.getElementsByClassName("photo-text");
//             photo.classList.add("photo-texthover");
//             // const html = document.createElement('span');
//             // html.className = 'photo-text photo-texthover';
//             // html.innerHTML = 'Explore';
//             // x.appendChild(html); 
//         }
//         function changephotoback(x) {
//             x.classList.remove("tabfthover");
//             var photo = document.getElementsByClassName("photo-text");
//             photo.classList.remove("photo-texthover");

//         }
//     });
// };

function changephotostyle(x) {
    x.classList.add("tabfthover");
    // var photo = document.getElementsByClassName("photo-text");
    // photo.classList.add("photo-texthover");
    // const html = document.createElement('span');
    // html.className = 'photo-text photo-texthover';
    // html.innerHTML = 'Explore';
    // x.appendChild(html); 
}
function changephotoback(x) {
    x.classList.remove("tabfthover");
        // var photo = document.getElementsByClassName("photo-text");
        // photo.classList.remove("photo-texthover");
}

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

    // container 2 antri tabai


    //swiperis
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});