// Variables
const logo = document.getElementById("logo"),
      menuBtn = document.getElementById("menu-btn"),
      navList = document.getElementById("nav-list"),
      body = document.getElementById("body"),
      menuBtnIcon = document.getElementById("menu-btn-icon"),
      navLinks = document.querySelectorAll(".nav-link"),
      cards = document.querySelectorAll(".p-l");
let   navListOpen = false;


// Logo click reload page
logo.onclick = () => {
   location.reload();
}

function card1() { window.open("https://bakirgracic.github.io/vaktija/", "_blank"); }
function card2() { window.open("https://www.planet-digi.weebly.com/", "_blank"); }
function card3() { window.open("https://www.youtube.com/watch?v=6gkoDQUQSLc", "_blank"); }
function card4() { window.open("https://aneagoie.github.io/robofriends/", "_blank"); }

cards[0].onclick = () => { card1(); }
cards[1].onclick = () => { card2(); }
cards[2].onclick = () => { card3(); }
cards[3].onclick = () => { card4(); }

// Menu Button Click (drop down menu list, disable scrolling, change menu icon)
menuBtn.onclick = () => {
   if (!navListOpen) {
      navList.classList.add("nav-list-active");
      body.style.overflowY = "hidden";
      menuBtnIcon.classList.replace("fa-bars", "fa-times");
      navListOpen = true;
   } else {
      navList.classList.remove("nav-list-active");
      body.style.overflowY = "scroll";
      menuBtnIcon.classList.replace("fa-times", "fa-bars");
      navListOpen = false;
   }
}

// On mobile on any link click, hide list, change icon, allow scrolling
navLinks.forEach(element => {
   element.onclick = () => {
      navList.classList.remove("nav-list-active");
      body.style.overflowY = "scroll";
      menuBtnIcon.classList.replace("fa-times", "fa-bars");
      navListOpen = false;
   }
});


// jQuery
$(document).ready(function() {
   // Page scrolling effects
   $(window).scroll(function() {
      // Nav on scroll
      if (this.scrollY > 25) {
         $(".nav").addClass("nav-scroll");
      } else {
         $(".nav").removeClass("nav-scroll");
      }
   });
   // Hero typing effect
   var typed = new Typed(".typing", {
      strings: ["Developer", "Freelancer", "Designer", "Technician"],
      typeSpeed: 85,
      backSpeed: 45,
      loop: true
   });
   // OwlCarousel2 - portfolio
   $('.owl-carousel').owlCarousel({
      margin:15,
      nav:false,
      dots:false,
      responsive:{
         0:{
            items:1
         },
         575:{
            items:2
         },
         950:{
            items:3
         }
      }
   });
});