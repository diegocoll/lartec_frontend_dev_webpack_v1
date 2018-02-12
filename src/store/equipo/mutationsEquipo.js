// ------------------------------------------- LIBRERIAS

// ------------------------------------------- NOMBRE DE MUTACIONES

export const ALL_EQUIPOS = 'ALL_EQUIPOS'
export const ALL_EQUIPOS_SUCCESS = 'ALL_EQUIPOS_SUCCESS'

// export const EQUIPO_BY_ID = 'EQUIPO_BY_ID'
// export const EQUIPO_BY_ID_SUCCESS = 'EQUIPO_BY_ID_SUCCESS'
//
// export const ADD_EQUIPO = 'ADD_EQUIPO'
// export const ADD_EQUIPO_SUCCESS = 'ADD_EQUIPO_SUCCESS'
//
// export const UPDATE_EQUIPO = 'UPDATE_EQUIPO'
// export const UPDATE_EQUIPO_SUCCESS = 'UPDATE_EQUIPO_SUCCESS'
//
// export const REMOVE_EQUIPO = 'REMOVE_EQUIPO'
// export const REMOVE_EQUIPO_SUCCESS = 'REMOVE_EQUIPO_SUCCESS'

// ------------------------------------------- MUTACIONES

export const mutationsEquipo = {
  [ALL_EQUIPOS] (state) {
    // Called when fetching equipos
    state.showLoader = true
  },
  [ALL_EQUIPOS_SUCCESS] (state, payload) {
    // Called when products have been fetched
    state.showLoader = false
    // Updates state products
    state.equipos = payload
  }
  // , ---------------!!!!!!!!!!!!!! hay que agregar la coma en la llave anterior
  // [EQUIPO_BY_ID] (state) {
  //   // Called when fetching equipos by ID
  //   state.showLoader = true
  // },
  // [EQUIPO_BY_ID_SUCCESS] (state, payload) {
  //   // Called when equipo is fetched
  //   state.showLoader = false
  //   // Updates state equipo
  //   state.equipo = payload
  // },
  // [ADD_EQUIPO]: (state, payload) => {
  //   // ...Same pattern
  //   state.showLoader = true
  // },
  // [ADD_EQUIPO_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   state.equipos.push(payload)
  // },
  // [UPDATE_EQUIPO]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [UPDATE_EQUIPO_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   state.equipos = state.equipos.map(p => {
  //     if (p._id === payload._id) {
  //       payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
  //       return payload
  //     }
  //     return p
  //   })
  // },
  // [REMOVE_EQUIPO]: (state, payload) => {
  //   state.showLoader = true
  // },
  // [REMOVE_EQUIPO_SUCCESS]: (state, payload) => {
  //   state.showLoader = false
  //   const index = state.equipos.findIndex(p => p._id === payload)
  //   console.debug('index', index)
  //   state.equipos.splice(index, 1)
  // }
}
