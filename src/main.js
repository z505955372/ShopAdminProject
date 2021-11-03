import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'


import axios from 'axios'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI);
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')