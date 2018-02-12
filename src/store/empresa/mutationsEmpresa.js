// ------------------------------------------- LIBRERIAS

// import Vue from 'vue'
// import Router from 'vue-router'

// ------------------------------------------- NOMBRE DE MUTACIONES

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'
export const STATUSLOGIN = 'STATUSLOGIN'

// ------------------------------------------- MUTACIONES

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  // increment (state) {
  //   state.counter++
  // },
  [LOGIN] (state) {
    state.showLoader = true
    state.statusLogin = ''
  },
  [LOGIN_SUCCESS] (state, payload) {
    // state.user.nombre = payload.nombre
    state.user.email = payload.email
    state.user.accessToken = payload.accessToken
    state.user.isLoggedIn = true
    state.showLoader = false
    state.statusLogin = ''
    // localStorage.setItem('token', 'JWT')   // HAY QUE GUARDAR LOS DATOS EN SESSIONES
  },
  [LOGIN_ERROR] (state) {
    state.user.isLoggedIn = false
  },
  [LOGOUT] (state) {
    state.user.isLoggedIn = false
  },
  [STATUSLOGIN] (state, payload) {
    state.statusLogin = payload.title
    state.showLoader = false
  }
}
