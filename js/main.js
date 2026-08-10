const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


const skillCards = document.querySelectorAll(".skill-reveal");

const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

skillCards.forEach((card) => {
  skillObserver.observe(card);
});

const aboutItems = document.querySelectorAll(".about-reveal");

const aboutObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

aboutItems.forEach((item) => {
  aboutObserver.observe(item);
});


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");
  });
});

// ===========================
// SCROLL TO TOP
// ===========================

const scrollTopButton = document.querySelector(".scroll-top");

if (scrollTopButton) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }

  });

  scrollTopButton.addEventListener("click", () => {

    console.log("scroll button clicked");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  });

}