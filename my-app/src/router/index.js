import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//import App from '../App.vue'
import MainArticles from '../components/MainArticles.vue'
import Destinations from '../components/Destinations.vue'
import Articles from '../components/Articles.vue'
import NewPost from '../components/NewPost.vue'
import UserArea from '../components/UserArea.vue'
import Post from '../components/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: MainArticles
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destinations
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/:id/newPost',
    name: 'newPost',
    component: NewPost
  },
  {
    path: '/myArticles/:id?',
    name: 'myArticles',
    component: UserArea
  },
  {
    path: '/post/:id?',
    name: 'post',
    component: Post
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
