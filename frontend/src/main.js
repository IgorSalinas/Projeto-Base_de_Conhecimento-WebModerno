import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from  './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iklnb3IgU2FsaW5hcyIsImVtYWlsIjoiaWdvckBzYWxpbmFzLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODM1NDAxODQsImV4cCI6MTU4Mzc5OTM4NH0.mhdUZKUPJJDA8I3ChpX4LqMjYGVOBOqbXhY_Evmu6kg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')