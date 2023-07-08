// Auto-Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Auto-Remove Navbar
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
document.onclick = function(e) {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}
toggle.onclick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// For the background color change of the navbar
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Swiper Bundle
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
