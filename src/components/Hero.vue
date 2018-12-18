<template>

    <section class="hero bg-overlay" id="hero" data-bg="../assets/public/img/hero.jpeg">
        <div class="overlay"></div>
        <div class="text">
            <p class="lead">Заказать <span class="typed"></span></p>
            <img id="js-logo" class="js-logo1" src="../assets/img/jslogo.png" alt="JavaScript">
            <h1>Веб-разработчик<br><span class="author">Тимур Харитонов</span></h1>
            <div class="cta">
                <a href="#features" class="btn btn-primary smooth-link">Подробнее</a>
                <div class="link">
                    <a href="https://github.com/bodasooqa" target="_blank"><i class="fa fa-github"></i> Follow me on GitHub</a>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import HeroScripts from '../assets/js/HeroScripts';

    const heroScripts = new HeroScripts();

    export default {
        name: 'Hero',
        mounted() {
            heroScripts.typedText();
            heroScripts.shineJs();
            heroScripts.scrollSetting();
        }
    }
</script>

<style scoped lang="scss">
.hero {
    background-image: url(../assets/img/hero.jpeg);
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
}
</style>
