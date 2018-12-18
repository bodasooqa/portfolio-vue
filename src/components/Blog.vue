<template>
    <section class="padding bg-grey" id="blog">
        <div class="container">
            <h2 class="section-title">Следите за моим блогом</h2>
            <p class="section-lead text-muted">Я регулярно веду свой тематический блог, в котором рассказываю про наиболее интересные события в сфере веб, веду учет новых технологий, покарившихся мне и даже упоминаю некоторых заказчиков и их проекты.</p>
            <div class="section-body">
                <div class="row" v-masonry transition-duration="0.3s" item-selector=".masonry-item">
                    <div v-for="post in posts" :key="post.img" v-masonry-tile class="col-12 col-md-6 col-lg-4 masonry-item">
                        <article class="card">
                            <img class="card-img-top" :src="getImgUrl(post.img)">
                            <div class="card-body">
                                <div class="card-subtitle mb-2 text-muted">от <a href="#">bodasooqa</a> <span class="date">{{ post.date | formatDate }}</span></div>
                                <h4 class="card-title"><a href="#">{{post.title}}</a></h4>
                                <p class="card-text">{{post.desc}}</p>
                                <div class="text-right">
                                    <button @click="showAlert()" class="card-more">Читать дальше <i class="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 to-blog masonry-item">
                        <i class="fa fa-newspaper-o"></i>
                        <h4>Еще больше новостей в блоге</h4>
                        <button @click="showAlert()" class="btn btn-primary">Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlogScripts from "../assets/js/BlogScripts";

    const blogScripts = new BlogScripts();

    export default {
        name: "Blog",
        data: function () {
            return {
                posts: [
                    {
                        img: 'img03',
                        title: 'Видеокурсы',
                        desc: 'В ближайшее время планирую записать видеоуроки по JavaScript, а также некоторым его фреймворкам.',
                        date: 1526072400000
                    },
                    {
                        img: 'img06',
                        title: 'Криптоконвертер',
                        desc: 'В моем профиле на GitHub вы теперь можете оценить новый проект - "Cryptopay". Это простой и качественный конвертер криптовалюты.',
                        date: 1532206800000
                    },
                    {
                        img: 'img05',
                        title: 'Новые технологии',
                        desc: 'Теперь мой стек пополнился еще одним фреймворком - Vue.js! Дальнейшую разработку планирую вести на нем.',
                        date: 1526072400000
                    }
                ]
            }
        },
        methods: {
            getImgUrl(img) {
                const images = require.context('../assets/img/news/', false, /\.jpg$/);
                return images('./' + img + '.jpg');
            },
            showAlert() {
                blogScripts.setAlert();
            }
        },
        filters: {
            formatDate(val) {
                if (val) {
                    return new Date(val).toLocaleDateString();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .to-blog {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        i.fa {
            font-size: 8rem;
            color: #c5c5c5;
        }
        .btn {
            width: 120px;
            margin: auto;
            margin-top: 2rem;
            margin-bottom: 3rem;
        }
    }
    .date {
        float: right;
    }

</style>