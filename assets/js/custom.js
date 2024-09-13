// Hero Image Carousel
let currentIndex = 0;
let slides = document.querySelectorAll(".carousel-slide img");
let dots = document.querySelectorAll(".dot");
let totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
  const slideWidth = document.querySelector(".carousel-container").clientWidth;
  document.querySelector(".carousel-slide").style.transform = `translateX(-${
    index * slideWidth
  }px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(index);
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide();

slides.forEach((slide) => {
  slide.addEventListener("mouseover", stopAutoSlide);

  slide.addEventListener("mouseout", startAutoSlide);

  slide.addEventListener("click", stopAutoSlide);
});
