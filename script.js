// =======================
// SELECT ELEMENTS
// =======================

const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector(".navMenu");
const menuIcon = document.querySelector(".menuBtn i");

const box = document.getElementById("box");
const boxText = document.getElementById("boxText");
const wrapper = document.querySelector(".boxWrapper");

const body = document.body;
const navbar = document.querySelector(".navbar");




// =======================
// MENU
// =======================

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


// =======================
// VARIABLES
// =======================

let right = false;
let busy = false;


// =======================
// BOX CLICK
// =======================

box.addEventListener("click", () => {

    if (busy) return;

    busy = true;

    boxText.style.opacity = "0";

    if (!right) {

        moveRight();

    } else {

        moveLeft();

    }

});


// =======================
// MOVE LEFT ➜ RIGHT
// =======================

function moveRight() {

    wrapper.style.transition = "1s ease";
    wrapper.style.transform = "translateX(45vw)";

    // Center pahunchne ke baad bounce
    setTimeout(() => {

        box.classList.add("bounce");

    }, 1000);

    // Bounce complete hone ke baad
    setTimeout(() => {

        box.classList.remove("bounce");

        body.classList.add("blue");
        navbar.classList.add("blue");
        box.classList.add("blue");

        wrapper.style.transition = "1s ease";
        wrapper.style.transform = "translateX(calc(100vw - 260px))";

    }, 2800);

    setTimeout(() => {

        boxText.style.opacity = "1";

        right = true;

        busy = false;

    }, 3900);

}



// =======================
// MOVE RIGHT ➜ LEFT
// =======================

function moveLeft() {

    wrapper.style.transition = "1s ease";
    wrapper.style.transform = "translateX(45vw)";

    setTimeout(() => {

        box.classList.add("bounce");

    }, 1000);

    setTimeout(() => {

        box.classList.remove("bounce");

        body.classList.remove("blue");
        navbar.classList.remove("blue");
        box.classList.remove("blue");

        wrapper.style.transition = "1s ease";
        wrapper.style.transform = "translateX(0px)";

    }, 2800);

    setTimeout(() => {

        boxText.style.opacity = "1";

        right = false;

        busy = false;

    }, 3900);

}




window.addEventListener("load", () => {
    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    },1000);
});



/* ===========================
        INTRO VIDEO
=========================== */

const introVideo = document.getElementById("introVideo");

let hidden = false;

window.addEventListener("scroll",()=>{

    if(window.scrollY>80 && !hidden){

        hidden=true;

        introVideo.style.transform="translateY(-100%) scale(0.75)";

    }

    if(window.scrollY<20){

        hidden=false;

        introVideo.style.transform="translateY(0) scale(1)";

    }

});






const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});
    


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});