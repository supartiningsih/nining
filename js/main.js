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