// ***Offer Message Function

var offerMsg = document.getElementById("off-msg")
var closeOffermsg = document.getElementById("close-offer-msg")

closeOffermsg.addEventListener("click", function () {
    offerMsg.style.display = "none"
})

// ***Slide Images Function
const slideImage = document.querySelector(".slide__image");
const images = document.querySelectorAll(".slide__image img");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");
let index = 0;

function slide(direction) {
    if (direction === 'next') {
        index = (index + 1) % images.length;
    } else {
        index = (index - 1 + images.length) % images.length;
    }
    slideImage.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => slide('prev'));
nextBtn.addEventListener("click", () => slide('next'));

// MenuIcon Click Function
var menuIcon=document.getElementById("menu-icon");
var menuClose=document.getElementById("menu-close");
var mobileNavbar= document.querySelector(".mobile-navbar");
var mobileNavbarOverlay= document.querySelector(".mobile-navbar__overlay");
var mobileNavOptClicktoClose= mobileNavbar.querySelectorAll("a");

menuIcon.addEventListener("click", function(){
    mobileNavbar.style.left="0%"
    mobileNavbarOverlay.style.display="block"
})

menuClose.addEventListener("click", function(){
    mobileNavbar.style.left="-70%"
    mobileNavbarOverlay.style.display="none"
})

mobileNavbarOverlay.addEventListener("click", function(){
    mobileNavbar.style.left="-70%"
    mobileNavbarOverlay.style.display="none"
})

// mobileNavOptClicktoClose.addEventListener("click", function(){
//     mobileNavbar.style.display="none"
//     mobileNavbarOverlay.style.display="none"
// });

// Heart Icon click to Red
var mwList = document.querySelectorAll(".most-wanted__box");

mwList.forEach(function (box) {
    var heartIconEmpty = box.querySelector(".heart-icon");
    var heartIconRed = box.querySelector(".heart-icon-red");

    heartIconEmpty.addEventListener("click", function () {
        heartIconEmpty.style.display = "none";
        heartIconRed.style.display = "block";
    });

    heartIconRed.addEventListener("click", function () {
        heartIconRed.style.display = "none";
        heartIconEmpty.style.display = "block";
    });
});

