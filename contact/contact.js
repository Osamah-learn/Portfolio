 // Look for .hamburger
 
 const hamburger = document.querySelector(".hamburger");


 //looking for nav links
 const nav = document.querySelector(".nav-links");
 const links = document.querySelectorAll("a");
 window.onload = (event) => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("nav-open");
};
 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   
    hamburger.classList.toggle("is-active");
  
  
   
   nav.classList.toggle("nav-open");
 })

 links.forEach(link=>{
   link.addEventListener("click",()=>{
    nav.classList.toggle("nav-open");
   })
 })
   // Do something else, like open/close menu

/* Burger Animation Ened */