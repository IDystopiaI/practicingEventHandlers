// create a NodeList of all images within the slide class
// this selects the img elements inside a parent container with a class of .slides
const slides = document.querySelectorAll(".slides img");
// console.log(slides[0]); // debug
let slideIndex = 0;
let intervalId = null;

// optional, use an eventListener which prevents js from running
// until DOM has loaded
// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

// call this func to populate browser with first img
function initializeSlider() {
  // check that the slides NodeList is not empty, if it has elements
  // run code
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    // setInterval returns a process Id to identify it, we then
    // store it in intervalId
    // every 5s, the function calls the nextSlide() function
    intervalId = setInterval(nextSlide, 5000);
    console.log(intervalId);
  } else {
    console.log("check querySelectorAll() statement");
  }
}

// index of the next slide to preview
function showSlide(index) {
  // check if slide index is out of bounds
  if (index >= slides.length) {
    slideIndex = 0;
    // if someone clicks prev on slide[0], wrap to slide on the end
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    // strip the displaySlide class so that the slide can be swapped
    slide.classList.remove("displaySlide");
  });
  // add displaySlide to the new element we want to display
  slides[slideIndex].classList.add("displaySlide");
}

/* eslint-disable-next-line */
function prevSlide() {
  // interrupt auto cycle so that it gets full 5s loop
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
  // resume auto cycle
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 5000);
}
