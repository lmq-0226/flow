import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import request from 'utils/request.js'
Vue.prototype.request = request

import store from 'store/store.js'
Vue.prototype.store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif