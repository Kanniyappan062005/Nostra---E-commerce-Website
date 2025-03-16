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