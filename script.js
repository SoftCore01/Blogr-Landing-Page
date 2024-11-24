let connectLink = document.getElementById("connect");
let header = document.querySelector(".header");
let connectMenu = document.querySelector(".connect-menu");
let one = document.querySelector(".one");
let arrow = document.querySelector(".arrow-invert");
let burgerDiv = document.querySelector(".burger-img");
let closeImg = document.querySelector(".close");
let burgerImg = document.querySelector(".burger");
let nav = document.querySelector("#nav");
let links = document.querySelector(".links")

let largeScreenQuery = window.matchMedia("(min-width: 699px)");

connectLink.addEventListener("click",
    function () {
        if (largeScreenQuery.matches) {
            if (
              connectMenu.style.display === "none" ||
              connectMenu.style.display === ""
            ) {
                connectMenu.style.display = "flex";
                arrow.style.transform = "scaleY(1)";
            } else {
              connectMenu.style.display = "none";
              arrow.style.transform = "scaleY(1)";
            }
        }else {
            if (
              one.style.display === "none" ||
              one.style.display === ""
            ) {
              one.style.display = "flex";
              arrow.style.transform = "scaleY(1)";
            } else {
              one.style.display = "none";
              arrow.style.transform = "scaleY(1)";
            }
        }

      
    
             
    }
);

burgerDiv.addEventListener("click",
    function () {
        if (burgerImg.style.display === "" || burgerImg.style.display === "block" && largeScreenQuery) {
          closeImg.style.display = "block";
          burgerImg.style.display = "none";
          links.style.display = "flex";
        } else {
          closeImg.style.display = "none";
          burgerImg.style.display = "block";
          links.style.display = "none";
        }
    }
);

const mediaQuery = window.matchMedia("(max-width: 600px)");

if (mediaQuery.matches) {
  console.log("Viewport is 600px or less");
} else {
  console.log("Viewport is greater than 600px");
}

