<template>
    <section id="works">
        <div class="container">
            <h2 class="section-title">Мои работы</h2>
            <p class="section-lead text-muted">В данной подборке вам представляются мои проекты, а так же проекты, в которых я принял непосредственное участие.</p>
            <div class="works swiper-container">
                <div class="swiper-wrapper">
                    <div class="work swiper-slide" v-for="work of works" :key="work.name">
                        <a :href="work.url" target="_blank">
                            <img :src="getImgUrl(work.img)" :alt="work.name">
                            <h4>{{work.name}}</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <vue-particles color="#0000f2" linesColor="#000000" :moveSpeed="7"></vue-particles>
    </section>
</template>

<script>
    import WorksScripts from '../assets/js/WorksScripts';

    const worksScripts = new WorksScripts();

    export default {
        name: "Works",
        data: () => {
            return {
                works: [
                    {
                        name: "Kassir.ru",
                        img: "kino-kassir",
                        url: 'https://kassir.ru',
                    },
                    {
                        name: "Terra",
                        img: "terra",
                        url: 'http://terracorp.ru',
                    },
                    {
                        name: "Exteriorcenter",
                        img: "exterior",
                        url: 'http://exteriorcenter.ru',
                    },
                    {
                        name: "Artline",
                        img: "artline",
                        url: 'http://show-artline.ru',
                    }
                ]
            }
        },
        methods: {
            getImgUrl(img) {
                const images = require.context('../assets/img/works', false, /\.png$/);
                return images('./' + img + ".png");
            }
        },
        mounted() {
            worksScripts.setSwiper();
        }
    }
</script>

<style lang="scss" scoped>
    @import "~swiper/dist/css/swiper.min.css";

    #works {
        height: 115%;
        .container {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
        }
        h2 {
            margin-top: 100px;
        }
        .works {
            background: rgba(255, 255, 255, 0.8);
            padding: 15px;
            .work {
                //filter: blur(3px);
                padding: 15px;
                outline: none;
                border: 1px solid #eeeeee;
                a {
                    text-decoration: none;
                    outline: none;
                    img {
                        width: 100%;
                    }
                    h4 {
                        text-align: center;
                        padding: 20px;
                    }
                }
            }
            .work.slick-slide.slick-current.slick-active.slick-center {
                filter: blur(0px);
            }
        }
    }
    .swiper-button-next, .swiper-button-prev {
        top: 58%;
        outline: none;
    }
    .swiper-button-prev {
        left: 0;
    }
    .swiper-button-next {
        right: 0;
    }

    @media (max-width: 767px) {
        .swiper-button-prev, .swiper-button-next {
            display: none;
        }
    }

    @media (max-width: 1199px) {
        #works {
            height: 110%;
        }
    }

</style>