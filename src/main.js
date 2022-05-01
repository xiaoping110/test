import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant'
import 'amfe-flexible'//处理px 自动转换rem

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
