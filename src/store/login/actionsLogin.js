// ------------------------------------------- IMPORTACION DE CONSTANTES

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  // LOGOUT,
  STATUSLOGIN
} from './mutationsLogin'

// ------------------------------------------- LIBRERIAS

// import Vue from 'vue'
// import router from 'vue-router'
import axios from 'axios'
import qs from 'qs'

// ------------------------------------------- CONSTANTES

// import API_BASE from '././main.js'
// const API_BASE = 'http://localhost:3030'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION
// const API_BASE = 'http://54.233.162.8:3030'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION

// axios.defaults.baseURL = 'http://localhost:3030/api'
// axios.defaults.baseURL = 'http://54.233.162.8:3030/api' // Para el server remoto

// ------------------------------------------- CODIGO

export const actionsLogin = {
  startlogin: ({commit}, payload) => {
    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      commit(LOGIN)
      axios.post(`/login`,
        qs.stringify({
          // username: payload.username,
          email: payload.email,
          password: payload.password
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
        .then(resp => {
          // console.log(resp)
          if (typeof (resp.data.content) !== 'undefined') {
            commit(STATUSLOGIN, resp.data)
          } else {
            commit(LOGIN_SUCCESS, resp.data)
            // console.log(resp) //SE AGREGO PARA EL DEBUGEO DEL LOGIN, PARA TRAER LOS DATOS DE USUARIO
            resolve(resp)
          }
        })
        .catch(err => {
          console.log(err)
          commit(LOGIN_ERROR, err.data)
          reject(err)
        })
    })
  }
}
