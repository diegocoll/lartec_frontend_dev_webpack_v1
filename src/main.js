// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// ------------------------------------------- LIBRERIAS

import Vue from 'vue'
import Vuetify from 'vuetify'
import Axios from 'axios'
import { VueExtendLayout, layout } from 'vue-extend-layout'

import 'chart.js'
import 'hchs-vue-charts'

// import 'pdfmake/build/pdfmake.js'
// import 'pdfmake/build/vfs_fonts.js'

// import leaflet from 'leaflet'

// ------------------------------------------- CCS

import 'vuetify/dist/vuetify.min.css'

// ------------------------------------------- RUTAS
// import App from './App'
import router from './router'
import store from './store'

// ------------------------------------------- AXIOS

// Axios.defaults.baseURL = 'http://localhost:3030'
Axios.defaults.baseURL = 'http://54.233.162.8:3030' // Para el server remoto

Axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// ------------------------------------------- Auth

// var Auth = {
//   loggedIn: false,
//   login: function () { this.loggedIn = true },
//   logout: function () { this.loggedIn = false }
// }
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
//     next({path: '/login', query: { redirect: to.fullPath }})
//   } else {
//     next()
//   }
// })

// ------------------------------------------- USE

Vue.use(window.VueCharts)

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.use(VueExtendLayout)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  ...layout              // se agrego para que funciones con multiples layouts
  // components: { App },
  // template: '<App/>'
})
