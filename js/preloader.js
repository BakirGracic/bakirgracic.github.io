const preloader = document.getElementById("preloader-wrap");

body.style.overflowY = "hidden";

window.addEventListener("load", preloader_dissapear = () => {
   body.style.overflowY = "scroll";
   preloader.classList.add("preloader-disppear");
});