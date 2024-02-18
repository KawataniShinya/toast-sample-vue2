import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted'
import 'vue-toasted/dist/vue-toasted.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 500000,
  type: 'info',
  theme: 'toasted-primary',
  iconPack : 'fontawesome',
  action : {
      text : '',
      icon : 'fa-times-circle',
      class: 'white-icon large-icon',
      onClick : (e, toastObject) => {
          toastObject.goAway(0);
      }
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
