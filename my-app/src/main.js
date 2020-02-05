import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
//Is there is any token we will simply append defaut axios auth headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')