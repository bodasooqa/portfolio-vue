import Vue from 'vue'
import Router from 'vue-router'
import Loveme from './views/Loveme'
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/love-me',
      name: 'love-me',
      component: Loveme
    }
  ]
})
