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

export const mutationsLogin = {
  // toggleSidebar (state) {
  //   state.sidebar = !state.sidebar
  // },
  [LOGIN] (state) {
    state.showLoader = true
    state.user.isLoggedIn = false
    state.statusLogin = ''
  },
  [LOGIN_SUCCESS] (state, payload) {
    // state.user.nombre = payload.nombre
    state.user.email = payload.email
    state.user.accessToken = payload.accessToken
    localStorage.setItem('token', payload.accessToken)   // HAY QUE GUARDAR LOS DATOS EN SESSIONES
    // localStorage.setItem('email', payload.email)         // HAY QUE GUARDAR LOS DATOS EN SESSIONES
    state.user.isLoggedIn = true
    state.showLoader = false
    state.statusLogin = ''
  },
  [LOGIN_ERROR] (state) {
    state.user.isLoggedIn = false
  },
  [LOGOUT] (state) {
    localStorage.removeItem('token')   // HAY QUE GUARDAR LOS DATOS EN SESSIONES
    // localStorage.removeItem('email')   // HAY QUE GUARDAR LOS DATOS EN SESSIONES
    state.user.isLoggedIn = false
  },
  [STATUSLOGIN] (state, payload) {
    state.statusLogin = payload.title
    state.showLoader = false
  }
}
