<template>

    <section id="technologies">
        <div class="container">
            <h2 class="section-title">Технологии</h2>
            <p class="section-lead text-muted">В своих проектах я использую множество различных технологий, которые делают процесс разработки проще, а работу будущего сайта или веб-приложения качественнее.</p>
            <div class="technologies swiper-container">
                <div class="swiper-wrapper">
                    <div class="item swiper-slide" v-for="tech in techs" :key="tech">
                        <img :src="getImgUrl(tech)" :alt="tech">
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import StackScripts from "../assets/js/StackScripts";

    const stackScripts = new StackScripts();

    export default {
        name: "Stack",
        data: () => {
            return {
                techs: [
                    "angular", "babel", "bootstrap", "vue", "express", "fa", "git", "gulp",
                    "jquery", "mongo", "node", "sass", "typed", "webpack",
                ]
            }
        },
        methods: {
            getImgUrl(img) {
                const images = require.context('../assets/img/techs', false, /\.png$/);
                return images('./' + img + ".png");
            }
        },
        mounted() {
            stackScripts.setSwiper();
        }
    }
</script>

<style lang="scss" scoped>
    @import "~swiper/dist/css/swiper.min.css";

    .swiper-slide {
        text-align: center;
    }
</style>