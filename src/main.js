import Vue from 'vue';
import App from './App.vue';
import VueParticles from 'vue-particles';
import {VueMasonryPlugin} from 'vue-masonry';
import router from './router'

Vue.use(VueParticles);
Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
