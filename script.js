// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

// ====== IMAGE SLIDER ======
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Remove active class from all dots
  dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

  // Show current slide and dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
}
