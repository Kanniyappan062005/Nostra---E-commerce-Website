// ***Offer Message Function

var offerMsg = document.getElementById("off-msg")
var closeOffermsg = document.getElementById("close-offer-msg")

closeOffermsg.addEventListener("click", function () {
    offerMsg.style.display = "none"
})

// MenuIcon Click Function
var menuIcon = document.getElementById("menu-icon");
var menuClose = document.getElementById("menu-close");
var mobileNavbar = document.querySelector(".mobile-navbar");
var mobileNavbarOverlay = document.querySelector(".mobile-navbar__overlay");
var mobileNavOptClicktoClose = mobileNavbar.querySelectorAll("a");

menuIcon.addEventListener("click", function () {
    mobileNavbar.style.left = "0%"
    mobileNavbarOverlay.style.display = "block"
})

menuClose.addEventListener("click", function () {
    mobileNavbar.style.left = "-70%"
    mobileNavbarOverlay.style.display = "none"
})

mobileNavbarOverlay.addEventListener("click", function () {
    mobileNavbar.style.left = "-70%"
    mobileNavbarOverlay.style.display = "none"
})

// mobileNavOptClicktoClose.addEventListener("click", function () {
//     mobileNavbar.style.display = "none"
//     mobileNavbarOverlay.style.display = "none"
// });


// searchBar Function
var searchInput = document.getElementById("search-input")
var productContainer = document.querySelector(".product__container")
var productList = productContainer.querySelectorAll(".product-box")

searchInput.addEventListener("keyup", function () {

    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) {

        var productName = productList[count].querySelector(".product-box__name").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display="none"
        }else{
            productList[count].style.display="block"
        }
    }
})