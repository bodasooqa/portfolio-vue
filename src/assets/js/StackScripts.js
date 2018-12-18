import Swiper from 'swiper/dist/js/swiper.min';

export default class StackScripts {
    setSwiper() {
        new Swiper('.technologies', {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                502: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
}