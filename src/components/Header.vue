<template>

    <nav class="navbar navbar-expand-lg main-navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/bodasooqa.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><span></span>
          <span></span>
          <span></span>
        </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="mr-auto"></div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link smooth-link" href="#hero">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth-link" href="#features">Особенности</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth-link" href="#technologies">Технологии</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth-link" href="#project">Проектирование</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth-link" href="#works">Мои работы</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link smooth-link" href="#blog">Блог</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link smooth-link" to="love-me">Love Me</router-link>
                    </li>
                </ul>
                <form class="form-inline">
                    <a href="#contact" class="btn smooth-link align-middle btn-primary">Связаться</a>
                </form>
            </div>
        </div>
    </nav>

</template>

<script>
    import 'bootstrap/dist/js/bootstrap.min';

    import HeaderScripts from "../assets/js/HeaderScripts";

    const headerScripts = new HeaderScripts;

    export default {
        name: 'Header',
        mounted() {
            headerScripts.setNavbar();
            headerScripts.setEaseScroll();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
