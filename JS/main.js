let parallax = document.querySelector(".parallax");
let parallax1 = document.querySelector(".parallax1");
let parallax2 = document.querySelector(".parallax2");

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * 0.2 + 'px)';
    parallax1.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax2.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
}   

window.addEventListener("scroll", scrollParallax)