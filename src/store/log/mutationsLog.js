// ------------------------------------------- LIBRERIAS

// ------------------------------------------- NOMBRE DE MUTACIONES

export const ALL_LOGS = 'ALL_LOGS'
export const ALL_LOGS_SUCCESS = 'ALL_LOGS_SUCCESS'

// export const LOG_BY_ID = 'LOG_BY_ID'
// export const LOG_BY_ID_SUCCESS = 'LOG_BY_ID_SUCCESS'
//
// export const ADD_LOG = 'ADD_LOG'
// export const ADD_LOG_SUCCESS = 'ADD_LOG_SUCCESS'
//
// export const UPDATE_LOG = 'UPDATE_LOG'
// export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS'
//
// export const REMOVE_LOG = 'REMOVE_LOG'
// export const REMOVE_LOG_SUCCESS = 'REMOVE_LOG_SUCCESS'

// ------------------------------------------- MUTACIONES

export const mutationsLog = {
  [ALL_LOGS] (state) {
    // Called when fetching equipos
    state.showLoaderLog = true
  },
  [ALL_LOGS_SUCCESS] (state, payload) {
    // Called when products have been fetched
    state.showLoaderLog = false
    // Updates state products
    state.reporteLog = payload
  }
  // , ---------------!!!!!!!!!!!!!! hay que agregar la coma en la llave anterior
  // [LOG_BY_ID] (state) {
  //   // Called when fetching equipos by ID
  //   state.showLoader = true
  // },
  // [LOG_BY_ID_SUCCESS] (state, payload) {
  //   // Called when equipo is fetched
  //   state.showLoader = false
  //   // Updates state equipo
  //   state.equipo = payload
  // },
  // [ADD_LOG]: (state, payload) => {
  //   // ...Same pattern
  //   state.showLoader = true
  // },
  // [ADD_LOG_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   state.equipos.push(payload)
  // },
  // [UPDATE_LOG]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [UPDATE_LOG_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   state.equipos = state.equipos.map(p => {
  //     if (p._id === payload._id) {
  //       payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
  //       return payload
  //     }
  //     return p
  //   })
  // },
  // [REMOVE_LOG]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [REMOVE_LOG_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   const index = state.equipos.findIndex(p => p._id === payload)
  //   console.debug('index', index)
  //   state.equipos.splice(index, 1)
  // }
}
