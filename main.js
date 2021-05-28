


/* Loader Animation */

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");


function init(){
    setTimeout(()=>{
loader.style.opacity=0;
loader.style.display="none";
console.log("done")
main.style.display="block";
setTimeout(()=>{
    main.style.opacity=1,50;
},2000)

    }, 3000);
}


init();

/* Loader Conaspt End*/


/* Burger Animation  */


 // Look for .hamburger
 
 const hamburger = document.querySelector(".hamburger");


 //looking for nav links
 const nav = document.querySelector(".nav-links");
 const links = document.querySelectorAll("a");
 window.onload = (event) => {
  
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





/* Typping Effects */

var i = 0;
var text = "Hi There ! my name is Osamah, and I’m a front end Developer From Finland welcome to my website  ";
function typing(){
  if (i<text.length){
    document.getElementById("text").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,500)
  }
}

typing();