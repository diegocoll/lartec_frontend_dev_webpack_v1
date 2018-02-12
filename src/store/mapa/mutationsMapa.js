// ------------------------------------------- LIBRERIAS

// ------------------------------------------- NOMBRE DE MUTACIONES

export const OPEN_PANEL = 'OPEN_PANEL'
export const CLOSE_PANEL = 'CLOSE_PANEL'

export const ALL_REPORTES = 'ALL_REPORTES'
export const ALL_REPORTES_SUCCESS = 'ALL_REPORTES_SUCCESS'

// export const REPORTE_BY_ID = 'REPORTE_BY_ID'
// export const REPORTE_BY_ID_SUCCESS = 'REPORTE_BY_ID_SUCCESS'
//
// export const ADD_REPORTE = 'ADD_REPORTE'
// export const ADD_REPORTE_SUCCESS = 'ADD_REPORTE_SUCCESS'
//
// export const UPDATE_REPORTE = 'UPDATE_REPORTE'
// export const UPDATE_REPORTE_SUCCESS = 'UPDATE_REPORTE_SUCCESS'
//
// export const REMOVE_REPORTE = 'REMOVE_REPORTE'
// export const REMOVE_REPORTE_SUCCESS = 'REMOVE_REPORTE_SUCCESS'

// ------------------------------------------- MUTACIONES

export const mutationsMapa = {
  [OPEN_PANEL] (state, payload) {
    state.equipos.map(p => {
      if (p.id === payload.equipoId) {
        state.mapaLatitud = p.lat
        state.mapaLongitud = p.lon
        state.vehiculoPanel.Equipo = p.equipo_id
      }
    })
    state.mapaZoom = 18
    state.vehiculoPanel.Chasis = payload.chasis
    state.vehiculoPanel.Chofer = payload.chofer
    state.vehiculoPanel.Color = payload.color
    state.vehiculoPanel.EmpresaId = payload.empresaId
    state.vehiculoPanel.EquipoId = payload.equipoId
    state.vehiculoPanel.Estado = payload.estado
    state.vehiculoPanel.Marca = payload.marca
    state.vehiculoPanel.Modelo = payload.modelo
    state.vehiculoPanel.Motor = payload.motor
    state.vehiculoPanel.Nombre = payload.nombre
    state.vehiculoPanel.Patente = payload.patente
    state.vehiculoPanel.Tipo = payload.tipo
    state.vehiculoPanel.Titular = payload.titular
    state.vehiculoPanel.Voltaje = payload.voltaje
  },
  [CLOSE_PANEL] (state) {
    state.mapaLatitud = -29.419531
    state.mapaLongitud = -66.855920
    state.mapaZoom = 13
  },
  [ALL_REPORTES] (state) {
    state.showLoaderReporte = true
  },
  [ALL_REPORTES_SUCCESS] (state, payload) {
    state.showLoaderReporte = false
    state.reportes = payload
    // state.graficaData = {
    //   dataset: [],
    //   labels: []
    // }
    var datasetAux = []
    var labelsAux = []
    state.reportes.map(p => {
      datasetAux.push(p.vel)
      labelsAux.push(p.fec)
    })
    state.graficaData = {
      dataset: datasetAux,
      labels: labelsAux
    }
  }
}
