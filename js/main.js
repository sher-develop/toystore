const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  centeredSlides: "auto",
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
});

sr.reveal(
  `.hero-wrapper, .card-wrapper__list, .catalog-header, .catalog-item, .story-wrapper, .webflow-item, .subscribe, .instagram-img`,
  {
    delay: 250,
    origin: "top",
    interval: 200,
  }
);
sr.reveal(
  `.card-img-one, .card-img-two, .story, .webflow, .webflow-wrapper, .instagram-wrapper__suptitle, .instagram-wrapper__title`,
  {
    delay: 200,
    origin: "right",
    interval: 100,
  }
);

const menu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".nav-close__btn");
const menuBtn = document.querySelector(".nav-menu__btn");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.add("active");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.remove("active");
  closeBtn.classList.remove("active");
});
