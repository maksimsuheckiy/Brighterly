import Swiper, {Navigation, Pagination} from "swiper";

new Swiper(".evaluate-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Navigation, Pagination],
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 7
        },
        930: {
            slidesPerView: 2.8,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 6,
            autoHeight: true
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});