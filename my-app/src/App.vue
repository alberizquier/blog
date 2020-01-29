<template>
  <div id="app">
    <Menu></Menu>
    <!-- <MenuActive></MenuActive> -->
    <!-- <MainArticles></MainArticles> -->
    <!-- <Articles></Articles> -->
    <!-- <Destinations></Destinations> -->
    <!-- <Post></Post> -->
    <!-- <UserArea></UserArea> -->
    <NewPost></NewPost>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
// import MenuActive from './components/MenuActive.vue'
// import MainArticles from './components/MainArticles.vue'
// import Articles from './components/Articles.vue'
// import Destinations from './components/Destinations.vue'
// import Post from './components/Post.vue'
// import UserArea from './components/UserArea.vue'
import NewPost from './components/NewPost.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Menu,
    // MenuActive,
    // MainArticles,
    // Articles,
    // Destinations,
    // Post,
    // UserArea,
    NewPost,
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