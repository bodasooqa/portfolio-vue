import $ from 'jquery';
import axios from 'axios';

export default class BlogScripts {
    setAlert(status) {
        if ($('.alert-msg').length === 0) {
            const alert = document.createElement('div');
            const par = document.createElement('p');
            if (status) {
                $(alert).addClass('access');
                par.innerHTML = 'Ваше сообщение успешно отправлено.';
            } else {
                par.innerHTML = 'Вы указали не все поля. Сообщение не отправлено.';
            }
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

    sendMail(post) {
        axios.post('sendmail', {
            post: post
        }).then(() => {
            this.setAlert('success');
        })
    }
}