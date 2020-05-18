import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false

Vue.use(VueTouch);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
