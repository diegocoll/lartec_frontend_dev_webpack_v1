// ------------------------------------------- LIBRERIAS

// ------------------------------------------- NOMBRE DE MUTACIONES

export const ALL_VEHICULOS = 'ALL_VEHICULOS'
export const ALL_VEHICULOS_SUCCESS = 'ALL_VEHICULOS_SUCCESS'

// export const VEHICULO_BY_ID = 'VEHICULO_BY_ID'
// export const VEHICULO_BY_ID_SUCCESS = 'VEHICULO_BY_ID_SUCCESS'
//
export const ADD_VEHICULO = 'ADD_VEHICULO'
export const ADD_VEHICULO_SUCCESS = 'ADD_VEHICULO_SUCCESS'
//
// export const UPDATE_VEHICULO = 'UPDATE_VEHICULO'
// export const UPDATE_VEHICULO_SUCCESS = 'UPDATE_VEHICULO_SUCCESS'
//
// export const REMOVE_VEHICULO = 'REMOVE_VEHICULO'
// export const REMOVE_VEHICULO_SUCCESS = 'REMOVE_VEHICULO_SUCCESS'

// ------------------------------------------- MUTACIONES

export const mutationsVehiculo = {
  [ALL_VEHICULOS] (state) {
    // Called when fetching vehiculos
    state.showLoader = true
  },
  [ALL_VEHICULOS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.vehiculos = payload
  },
  // , ---------------!!!!!!!!!!!!!! hay que agregar la coma en la llave anterior
  // [VEHICULO_BY_ID] (state) {
  //   // Called when fetching vehiculos by ID
  //   state.showLoader = true
  // },
  // [VEHICULO_BY_ID_SUCCESS] (state, payload) {
  //   // Called when vehiculo is fetched
  //   state.showLoader = false
  //   // Updates state vehiculo
  //   state.vehiculo = payload
  // },
  [ADD_VEHICULO]: (state, payload) => {
    // ...Same pattern
    state.showLoader = true
  },
  [ADD_VEHICULO_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.vehiculos.push(payload)
  }
  // [UPDATE_VEHICULO]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [UPDATE_VEHICULO_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   state.vehiculos = state.vehiculos.map(p => {
  //     if (p._id === payload._id) {
  //       payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
  //       return payload
  //     }
  //     return p
  //   })
  // }
  // ,
  // [REMOVE_VEHICULO]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [REMOVE_VEHICULO_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   const index = state.vehiculos.findIndex(p => p._id === payload)
  //   console.debug('index', index)
  //   state.vehiculos.splice(index, 1)
  // }
}
