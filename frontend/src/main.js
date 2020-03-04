import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from  './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iklnb3IgU2FsaW5hcyIsImVtYWlsIjoiaWdvckBzYWxpbmFzLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODMyODM1OTAsImV4cCI6MTU4MzU0Mjc5MH0.Ev7siMMGmdxc6S-_o8M2pHM30YEJrTKlQEIcUlLyLUU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')