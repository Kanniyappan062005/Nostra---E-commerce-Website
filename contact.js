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