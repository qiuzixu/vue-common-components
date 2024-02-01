import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Icon)
import { Icon } from 'element-ui'
new Vue({
  render: h => h(App),
}).$mount('#app')
