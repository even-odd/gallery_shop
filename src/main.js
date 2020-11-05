import Vue from 'vue'
import App from './App.vue'

import EventBus from './services/EventBus'
import LocalSaver from './services/LocalSaver'

Vue.config.productionTip = false
Vue.config.devtools = true

let bus = EventBus.getInstanse()
Vue.prototype.$bus = bus
Vue.prototype.$saver = new LocalSaver(bus)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
