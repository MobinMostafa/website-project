
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "Freelancer", "Mern Stack Developer", "UI/UX Designer"],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
})

var swiper = new Swiper(".myServices", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// sticky header 
window.onscroll = function() {stickyHeader()};
let header = document.querySelector(".header");
let sticky = header.offsetTop;

function stickyHeader() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}


// dark/light theme js 
const themeButton = document.querySelector('.theme-container');
const themeIcon = document.querySelector('.fa-moon');



// themeButton.onclick = function () {

// }



themeButton.addEventListener('click', () => { 
  if(themeIcon.classList.contains('fa-moon')){
    themeIcon.classList.replace("fa-moon", "fa-sun")
    document.body.classList.add('darkTheme')
  }else{
    themeIcon.classList.replace("fa-sun" , "fa-moon")
    document.body.classList.remove('darkTheme')
  }
})

// show scroll top 
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); 
  else scrollTop.classList.remove('scroll-top'); 
}

window.addEventListener('scroll', scrollTop);







// counter js 
// let section_counter = document.querySelector("#counter-observer")

//             window.onscroll = function () {
//               var topElem = section_counter.offsetTop
//               var btmElem = section_counter.offsetTop + section_counter.clientHeight
//               var topScreen = window.pageYOffset
//               var btmScreen = window.pageYOffset + window.innerHeight
//               if(btmScreen > topElem && topScreen < btmElem){
//                 $('.counter').counterUp({

//                 });
//               }else{
      
//               }



// let counter = document.querySelectorAll(".counter")
// let section_counter = document.querySelector("#counter-observer")

// var inc = []

// function updateCounter() {
//    for(let i= 0; i<counter.length; i++){
//     inc.push(1)
//     if(inc[i] != counter[i].getAttribute("max-data")){
//       inc[i]++
//     }
//     counter[i].innerHTML = inc[i]
//    }
// }
  
//        var timer = setInterval(
//             window.onscroll = function () {
//               var topElem = section_counter.offsetTop
//               var btmElem = section_counter.offsetTop + section_counter.clientHeight
//               var topScreen = window.pageYOffset
//               var btmScreen = window.pageYOffset + window.innerHeight
//               if(btmScreen > topElem && topScreen < btmElem){
//                 updateCounter()
//               }else{
      
//               }
//             },0)
  
 



