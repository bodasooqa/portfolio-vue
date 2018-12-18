<template>
  <div id="app">

    <Header/>

    <Hero/>

    <Features/>

    <Stack/>

    <Project/>

    <Works/>

    <Blog/>

    <Contact/>

    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Header, Hero, Features, Stack, Project, Works, Blog, Contact, Footer
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/style";

  #app {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
</style>
