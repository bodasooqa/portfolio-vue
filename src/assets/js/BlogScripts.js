import $ from 'jquery';

export default class BlogScripts {
    setAlert() {
        if ($('.alert-msg').length === 0) {
            const alert = document.createElement('div');
            const par = document.createElement('p');

            par.innerHTML = 'Извините, блог временно не доступен.';
            $(alert).append(par);
            $(alert).addClass('alert-msg');
            $('body').append(alert);
            setTimeout(() => {
                $(alert).css('opacity', '1');
            }, 10);
            setTimeout(() => {
                $(alert).css('opacity', '0');
                setTimeout(() => {
                    $(alert).remove();
                }, 500);
            }, 5000);
        }
    }
}