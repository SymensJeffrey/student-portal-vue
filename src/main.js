import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import axios from 'axios'
=======
import axios from "axios";
>>>>>>> cbfd80f5562b2c74efe60fce728aa72af40c6947

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
