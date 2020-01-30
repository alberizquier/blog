<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  position: relative;
}

#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}

</style>