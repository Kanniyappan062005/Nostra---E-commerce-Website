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

// Select all checkboxes and product items
var checkboxes = document.getElementsByName("check");
var productList = document.querySelectorAll(".product-box");

// Function to update product display based on checked checkboxes
function updateProductDisplay() {
    // Get all checked values
    var checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value.toUpperCase());

    // If no checkboxes are checked, show all products
    if (checkedValues.length === 0) {
        productList.forEach(product => product.style.display = "block");
        return;
    }

    // Loop through each product and check if it matches any checked value
    productList.forEach(function(product) {
        var productName = product.querySelector(".product-box__name").textContent.toUpperCase();

        // Show product if it matches at least one checked value, otherwise hide it
        if (checkedValues.some(value => productName.includes(value))) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Attach event listener to each checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", updateProductDisplay);
});


