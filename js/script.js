let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); 
}

//
let wrap = document.querySelector(".service-container"),
    itemWidth = document.querySelectorAll(".item-ser")[0].clientWidth;

let items = document.querySelectorAll(".item-ser");

let position = 0;
let currentDot_3 = 0;

showSlide_3(wrap, 0, 0);

function showSlide_3(elem, pix, n) {
  position += pix;
  currentDot_3 += n;

  if (position > 0) { 
    position = -elem.clientWidth + pix;
    currentDot_3 = items.length - 1;
  } else if (position < -elem.clientWidth - pix) {
    position = 0;
    currentDot_3 = 0;
  }
  elem.style.transform = "translateX(" + position + "px)";
}

document.querySelector(".bi-arrow-left").addEventListener("click", function() {
  const prevIndex = currentDot_3 === 0 ? items.length - 1 : currentDot_3 - 1;
  position = -items[prevIndex].clientWidth * prevIndex;
  currentDot_3 = prevIndex;
  wrap.style.transform = "translateX(" + position + "px)";
});

document.querySelector(".bi-arrow-right").addEventListener("click", function() {
  const nextIndex = currentDot_3 === items.length - 1 ? 0 : currentDot_3 + 1;
  position = -items[nextIndex].clientWidth * nextIndex;
  currentDot_3 = nextIndex;
  wrap.style.transform = "translateX(" + position + "px)";

});

//

let wrap_1 = document.querySelector(".content"),
    itemWidth_1 = document.querySelectorAll(".slide")[0].clientWidth;

let items_1 = document.querySelectorAll(".slide");

let position_1 = 0;
let currentDot_1 = 0;

showSlide_1(wrap_1, 0, 0);

function showSlide_1(elem, pix, n) {
  position_1 += pix;
  currentDot_1 += n;

  if (position_1 > 0) { 
    position_1 = -elem.clientWidth + pix;
    currentDot_1 = items_1.length - 1;
  } else if (position_1 < -elem.clientWidth - pix) {
    position_1 = 0;
    currentDot_1 = 0;
  }
  elem.style.transform = "translateX(" + position_1 + "px)";
}

document.querySelector(".bi-arrow-left-short").addEventListener("click", function() {
  const prevIndex = currentDot_1 === 0 ? items_1.length - 1 : currentDot_1 - 1;
  position_1 = -items_1[prevIndex].clientWidth * prevIndex;
  currentDot_1 = prevIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";
});

document.querySelector(".bi-arrow-right-short").addEventListener("click", function() {
  const nextIndex = currentDot_1 === items_1.length - 1 ? 0 : currentDot_1 + 1;
  position_1 = -items_1[nextIndex].clientWidth * nextIndex;
  currentDot_1 = nextIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";

});
