import Vue from 'vue'
import App from './App.vue'

// style
require('@/styles/global.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
