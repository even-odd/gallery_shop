import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import EventBus from './services/EventBus'
import LocalSaver from './services/LocalSaver'
import Synchronizer from './services/Synchronizer'

Vue.config.productionTip = false
Vue.config.devtools = true

let bus = EventBus.getInstanse()
Vue.prototype.$bus = bus
Vue.prototype.$saver = new LocalSaver(bus)
Vue.prototype.$synchronizer = Synchronizer.getInstanse()
Vue.prototype.$http = axios.create()

new Vue({
  render: (h) => h(App),
}).$mount('#app')
