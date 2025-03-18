// ***Offer Message Function

var offerMsg = document.getElementById("off-msg")
var closeOffermsg = document.getElementById("close-offer-msg")

closeOffermsg.addEventListener("click", function () {
    offerMsg.style.display = "none"
})

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

mobileNavOptClicktoClose.addEventListener("click", function(){
    mobileNavbar.style.display="none"
    mobileNavbarOverlay.style.display="none"
});