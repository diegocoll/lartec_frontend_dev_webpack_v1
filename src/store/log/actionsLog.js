// ------------------------------------------- IMPORTACION DE CONSTANTES

import {
  ALL_LOGS,
  ALL_LOGS_SUCCESS
  // LOG_BY_ID,
  // LOG_BY_ID_SUCCESS,
  // ADD_LOG,
  // ADD_LOG_SUCCESS,
  // UPDATE_LOG,
  // UPDATE_LOG_SUCCESS,
  // REMOVE_LOG,
  // REMOVE_LOG_SUCCESS,
} from './mutationsLog'

// ------------------------------------------- LIBRERIAS

import axios from 'axios'
// import qs from 'qs'

// ------------------------------------------- CONSTANTES

// const API_BASE = 'http://localhost:3030/api'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION


axios.defaults.baseURL = 'http://54.233.162.8:3030/api' // Para el server remoto
// axios.defaults.baseURL = 'http://localhost:3030/api' // Para el server local

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// ------------------------------------------- CODIGO

export const actionsLog = {
  loadReporteLog ({commit}) {
    commit(ALL_LOGS)
    axios.get('/reportes?filter=%7B%22order%22%3A%20%5B%22fecserv%20DESC%22%5D%2C%20%22limit%22%3A%22100%22%7D&').then(response => {
      commit(ALL_LOGS_SUCCESS, response.data)
    })
    // .then(resp => {
    //   console.log(resp)
    // })
    .catch(err => {
      console.log(err)
      // commit(LOG_ERROR, err.data) // HAY QUE DEFINIR LA MUTACION
    })
  }
}
