new Swiper(".evaluate-swiper", {
    effect: "cards",
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    cardsEffect: {
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        768: {
            cardsEffect: {
                slideShadows: false,
                rotate: false,
            },
        },
        1220: {
            cardsEffect: {
                slideShadows: false,
                rotate: false,
                perSlideOffset: 8,
            },
        },
    },
});
new Swiper(".review-swiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    cardsEffect: {
        slideShadows: false,
        rotate: false,
        perSlideOffset: 9.5,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        380: {
            cardsEffect: {
                perSlideOffset: 10,
            },
        },
        480: {
            cardsEffect: {
                perSlideOffset: 12,
            },
        },
        640: {
            cardsEffect: {
                perSlideOffset: 15,
            },
        },
        768: {
            cardsEffect: {
                perSlideOffset: 18,
            },
        },
        992: {
            effect: false,
            slidesPerView: 6,
            autoHeight: true
        }
    },
});