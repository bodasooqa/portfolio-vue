<template>

    <section class="padding" id="features">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-sm-6">
                    <div class="elem" @mouseenter="setColor($event)">
                        <div class="icon">
                            <i class="fa fa-mortar-board"></i>
                        </div>
                        <h3>Более 4 лет опыта</h3>
                        <p class="lead">Это моя основная деятельность, сделано много сайтов разных тематик - от визитки до интернет-магазина.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="elem" @mouseenter="setColor($event)">
                        <div class="icon">
                            <i class="fa fa-tasks"></i>
                        </div>
                        <h3>Современные технологии</h3>
                        <p class="lead">Я постоянно совершенствую свои навыки и слежу за новинками в сфере ВЕБ.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="elem" @mouseenter="setColor($event)">
                        <div class="icon">
                            <i class="fa fa-money"></i>
                        </div>
                        <h3>Актуальная цена</h3>
                        <p class="lead">За свои услуги я беру столько, сколько они действительно стоят. Ничего лишнего. 100% отработка денег.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="elem" @mouseenter="setColor($event)">
                        <div class="icon">
                            <i class="fa fa-clock-o"></i>
                        </div>
                        <h3>Оптимальные сроки</h3>
                        <p class="lead">Предлагаю создание сайта любой сложности в самые сжатые сроки, без потери качества работы.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>

<script>
    import FeaturesScripts from "../assets/js/FeaturesScripts";

    const featuresScripts = new FeaturesScripts();

    export default {
        name: 'Hero',
        methods: {
            setColor(event) {
                featuresScripts.setColor(event.target);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
