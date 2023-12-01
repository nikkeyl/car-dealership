import Swiper, { Navigation } from 'swiper';

/*
Pagination,
EffectFade,
Autoplay,
Parallax,
*/

import "@scss/components/swiper.scss";
//import "@scss/libs/swiper.scss";
//import 'swiper/css';

export function initSliders() {
    if (document.querySelector('.swiper')) {
        new Swiper('.swiper', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            /*
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            */

            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },

            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            on: {
                /* fix: применить при не правильном числе слайдов */
                /* init: (swiper) => {
                    const allSlides = document.querySelector('.fraction-controll__all');
                    const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
                    allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
                },
                slideChange: (swiper) => {
                    const currentSlide = document.querySelector('.fraction-controll__current');
                    currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
                } */
            }
        });
    }
}
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper--scroll');
    if (sliderScrollItems.length > 0) {
        for (let i = 0; i < sliderScrollItems.length; i++) {
            const sliderScrollItem = sliderScrollItems[i];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}
window.addEventListener('load', function () {
    initSliders();
    //initSlidersScroll();
});