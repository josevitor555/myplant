
import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true,

        pagination: {
        el: ".swiper-pagination",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    console.log('Hello swiper!');
});
