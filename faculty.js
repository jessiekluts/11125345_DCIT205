let slideIndex = 0;
const slides = document.querySelectorAll('.faculty-profile');
const slider = document.querySelector('.staff-slider');

function showSlides() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlides();
}

setInterval(() => {
  nextSlide();
}, 5000);


showSlides();