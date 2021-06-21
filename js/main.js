// Variables
const logo = document.getElementById("logo"),
      menuBtn = document.getElementById("menu-btn"),
      navList = document.getElementById("nav-list"),
      body = document.getElementById("body"),
      menuBtnIcon = document.getElementById("menu-btn-icon"),
      navLinks = document.querySelectorAll(".nav-link");
let   navListOpen = false;


// Logo click reload page
logo.onclick = () => {
   location.reload();
}

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