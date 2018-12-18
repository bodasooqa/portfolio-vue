<template>
    <section class="padding bg-grey" id="contact">
        <div class="container">
            <h2 class="section-title text-center">Связаться</h2>
            <p class="section-lead text-center text-muted">Некоторая контактная информация, если захотите связаться со мной.</p>
            <div class="section-body">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <p class="contact-text">Вы можете позвонить мне в любой день с 10:00 до 20:00 или воспользоваться электронной почтой.</p>
                        <ul class="contact-icon">
                            <li><i class="fa fa-phone" style="font-size: 1.3rem;"></i> <div><a href="tel:+79964053955">+79964053955</a></div></li>
                            <li><i class="fa fa-envelope" style="font-size: 1.15rem;"></i> <div><a href="mail:bodasooqa@gmail.com">bodasooqa@gmail.com</a></div></li>
                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2820.265951919336!2d38.9726591!3d45.0195264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fb658110c0d%3A0x1dc1846365586649!2z0YPQuy4g0JzQuNGA0LAsIDQ2LCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTAwNjM!5e0!3m2!1sru!2sru!4v1545135932540" width="440" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>                    </div>
                    <div class="col-12 col-md-7">
                        <p class="contact-text">Также можете оставить сообщение здесь, и я в скором времени отвечу вам на указанный адрес Email.</p>

                        <form @submit.prevent="sendPost" class="contact row">
                            <div class="form-group col-6">
                                <input type="text" class="form-control" placeholder="Имя" name="name" id="name" v-model="post.name" required>
                            </div>
                            <div class="form-group col-6">
                                <input type="email" class="form-control" placeholder="Email" name="email" id="email" v-model="post.email" required="">
                            </div>
                            <div class="form-group col-12">
                                <input type="text" class="form-control" placeholder="Тема" name="subject" id="subject" v-model="post.subject" required="">
                            </div>
                            <div class="form-group col-12">
                                <textarea class="form-control" placeholder="Сообщение" name="text" id="text" v-model="post.message" required=""></textarea>
                            </div>
                            <div class="form-group col-12 mt-2">
                                <button type="submit" class="btn btn-primary">
                                    Отправить
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import ContactScripts from '../assets/js/ContactScripts';

    const contactScripts = new ContactScripts();

    class Post {
        constructor(name, email, subject, message) {
            this.name = name;
            this.name = email;
            this.name = subject;
            this.name = message;
        }
    }

    export default {
        name: "Contact",
        data: function () {
            return {
                post: new Post()
            }
        },
        methods: {
            sendPost() {
                if (this.post) {
                    contactScripts.sendMail(this.post);
                    this.post = new Post();
                } else {
                    contactScripts.setAlert();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>