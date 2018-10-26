// ------------------------------------------- IMPORTACION DE CONSTANTES

import {
  ALL_VEHICULOS,
  ALL_VEHICULOS_SUCCESS
  // VEHICULO_BY_ID,
  // VEHICULO_BY_ID_SUCCESS,
  // ADD_VEHICULO,
  // ADD_VEHICULO_SUCCESS,
  // UPDATE_VEHICULO,
  // UPDATE_VEHICULO_SUCCESS,
  // REMOVE_VEHICULO,
  // REMOVE_VEHICULO_SUCCESS,
} from './mutationsVehiculo'

// ------------------------------------------- LIBRERIAS

import axios from 'axios'
// import qs from 'qs'

// ------------------------------------------- CONSTANTES

// const API_BASE = 'http://localhost:3030/api'  // VER...!!! CAMBIAR POR UNA VARIABLE GLOBAL DE ENTORNO DE PRODUCCION
axios.defaults.baseURL = 'http://54.233.162.8:3030/api' // Para el server remoto
// axios.defaults.baseURL = 'http://localhost:3030/api' // Para el server local

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// ------------------------------------------- CODIGO

export const actionsVehiculo = {
  loadVehiculos ({commit}) {
    commit(ALL_VEHICULOS)
    axios.get('/vehiculos').then(response => {
      // console.log(response.data)
      commit(ALL_VEHICULOS_SUCCESS, response.data)
      // for (var i = 0; i < response.data.length; i++) {
      //   var aux = response.data[i].id
      //   axios.get('/vehiculos/' + response.data[i].id + '/equipo').then(Response => {
      //     console.log(aux)
      //     console.log(Response.data)
      //     // commit(ALL_VEHICULOS_SUCCESS, Response.data)
      //     // return Response.data
      //     // response.data[i].equipo_obj = Response.data
      //   })
      //    .catch(err => {
      //      console.log(err)
      //      // commit(VEHICULO_ERROR, err.data) // HAY QUE DEFINIR LA MUTACION
      //    })
      // }
    })
    // .then(resp => {
    //   console.log(resp)
    // })
    .catch(err => {
      console.log(err)
      // commit(VEHICULO_ERROR, err.data) // HAY QUE DEFINIR LA MUTACION
    })
  }
}
