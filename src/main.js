import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./css/common.css"
import popover from '@/views/bilibiliDemo/widgets/popover'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
Vue.directive('popover',popover)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
