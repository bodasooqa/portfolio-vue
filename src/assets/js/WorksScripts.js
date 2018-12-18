import Swiper from 'swiper/dist/js/swiper.min';

export default class WorksScripts {
    setSwiper() {
        new Swiper('.works', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
}