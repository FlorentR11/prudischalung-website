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

document.getElementById("contactForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(this);

const data = {
name: formData.get("name"),
email: formData.get("email"),
phone: formData.get("phone"),
message: formData.get("message")
};

await fetch("http://localhost:3000/send",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify(data)

});

alert("Anfrage wurde gesendet!");

});