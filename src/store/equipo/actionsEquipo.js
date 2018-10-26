// ------------------------------------------- IMPORTACION DE CONSTANTES

import {
  ALL_EQUIPOS,
  ALL_EQUIPOS_SUCCESS
  // EQUIPO_BY_ID,
  // EQUIPO_BY_ID_SUCCESS,
  // ADD_EQUIPO,
  // ADD_EQUIPO_SUCCESS,
  // UPDATE_EQUIPO,
  // UPDATE_EQUIPO_SUCCESS,
  // REMOVE_EQUIPO,
  // REMOVE_EQUIPO_SUCCESS,
} from './mutationsEquipo'

// ------------------------------------------- LIBRERIAS

import axios from 'axios'
// import qs from 'qs'

// ------------------------------------------- CONSTANTES

// const API_BASE = 'http://localhost:3030/api'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION
axios.defaults.baseURL = 'http://54.233.162.8:3030/api' // Para el server remoto
// axios.defaults.baseURL = 'http://localhost:3030/api' // Para el server local

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// ------------------------------------------- CODIGO

export const actionsEquipo = {
  loadEquipos ({commit}) {
    commit(ALL_EQUIPOS)
    axios.get('/equipos').then(response => {
      commit(ALL_EQUIPOS_SUCCESS, response.data)
    })
    // .then(resp => {
    //   console.log(resp)
    // })
    .catch(err => {
      console.log(err)
      // commit(EQUIPO_ERROR, err.data) // HAY QUE DEFINIR LA MUTACION
    })
  }
}
