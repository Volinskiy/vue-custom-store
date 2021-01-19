import Vue from 'vue'
import App from './App.vue'
import Store from '@/store/store.js'

Vue.use(Store); Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
