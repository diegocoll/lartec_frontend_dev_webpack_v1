// ------------------------------------------- IMPORTACION DE CONSTANTES

import {
  ALL_REPORTES,
  ALL_REPORTES_SUCCESS
  // REPORTE_BY_ID,
  // REPORTE_BY_ID_SUCCESS,
  // ADD_REPORTE,
  // ADD_REPORTE_SUCCESS,
  // UPDATE_REPORTE,
  // UPDATE_REPORTE_SUCCESS,
  // REMOVE_REPORTE,
  // REMOVE_REPORTE_SUCCESS,
} from './mutationsMapa'

// ------------------------------------------- LIBRERIAS

import axios from 'axios'
// import qs from 'qs'

// ------------------------------------------- CONSTANTES

// const API_BASE = 'http://localhost:3030/api'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION

// axios.defaults.baseURL = 'http://54.233.162.8:3030/api' // Para el server remoto

axios.defaults.baseURL = 'http://localhost:3030/api' // Para el server local
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// ------------------------------------------- CODIGO

export const actionsMapa = {
  loadReportes ({commit}, payload) {
    commit(ALL_REPORTES)
    // console.log(payload)
    axios.get('/equipos/' + payload.equipoId + '/reportes?filter=%7B%22limit%22%20%3A%20100%7D').then(response => {
      // console.log(response.data)
      commit(ALL_REPORTES_SUCCESS, response.data)
    })
    // .then(resp => {
    //   console.log(resp)
    // })
    .catch(err => {
      console.log(err)
      // commit(REPORTE_ERROR, err.data) // HAY QUE DEFINIR LA MUTACION
    })
  }
}
