document.addEventListener("DOMContentLoaded", function () {

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
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



// Lightbox JS
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const projectCards = document.querySelectorAll('.project-card img');
const closeBtn = document.querySelector('.close');

projectCards.forEach(img=>{
  img.addEventListener('click', ()=>{
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener('click', ()=>{
  lightbox.style.display = 'none';
});

// Close when click outside image
lightbox.addEventListener('click', e=>{
  if(e.target == lightbox) lightbox.style.display = 'none';
});





