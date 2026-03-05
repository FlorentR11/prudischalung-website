document.addEventListener("DOMContentLoaded", function () {

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");
});

function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Guten Morgen";
    } 
    else if (hour >= 12 && hour < 18) {
        greeting = "Guten Tag";
    } 
    else {
        greeting = "Guten Abend";
    }

    document.getElementById("greeting").innerText = greeting;
}