import Typed from 'typed.js';
import $ from 'jquery';

export default class HeroScripts {
    typedText () {
        const typedOptions = {
            strings: ['сайт-визитку', 'корпоративный сайт', 'landing page', 'информационный портал', 'инетрнет-магазин'],
            typeSpeed: 40,
            backSpeed: 20,
            loop: true,
            loopCount: Infinity
        };

        new Typed('.typed', typedOptions);
    }

    shineJs () {
        function addShine() {
            if (jsLogo.className === 'js-logo1') {
                jsLogo.className = '';
                jsLogo.classList.add(classes[1]);
            } else if (jsLogo.className === 'js-logo2') {
                jsLogo.className = '';
                jsLogo.classList.add(classes[0]);
            }
        }

        const jsLogo = document.getElementById('js-logo');
        const classes = ['js-logo1', 'js-logo2'];

        setInterval(addShine, 2000);
    }

    scrollSetting() {
        $(window).scroll(function () {
            const scroll = $(window).scrollTop();
            $('.hero').css('background-position', `50% -${scroll / 100 * 2}rem`);
        });
    }
}