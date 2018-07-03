// ------------------------------------------- LIBRERIAS

// ------------------------------------------- NOMBRE DE MUTACIONES

export const VEHICULO_ACTUAL = 'VEHICULO_ACTUAL'
export const ORIGEN_MAPA = 'ORIGEN_MAPA'

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
  [VEHICULO_ACTUAL] (state, payload) {
    // LA FUNCION DE ABAJO SE USA PARA RASTREAR EL VEHICULO SELECCIONADO EN
    // EL ARRAY DE EQUIPOS CARGADOS PARA EXTRAER LA LAT Y LOG PARA POSICIONAR EL MAPA

    state.equipos.map(p => {
      // console.log(p.id)
      if (p.id === payload.equipoId) {
        state.mapaLatitud = p.lat
        state.mapaLongitud = p.lon
        // state.VehiculoActual.Equipo = p.id
      }
    })
    // ALTURA DEL MAPA CUANDOS SE SELECCIONA UN VEHICULO
    state.mapaZoom = 18
    // DATOS DEL VEHICULO ACTUAL A MOSTRAR EN LA PAGINA Y BARRA LATERAL DERECHA

    state.VehiculoActual.Chasis = payload.chasis
    state.VehiculoActual.Chofer = payload.chofer
    state.VehiculoActual.Color = payload.color
    state.VehiculoActual.EmpresaId = payload.empresaId
    state.VehiculoActual.EquipoId = payload.equipoId
    state.VehiculoActual.Estado = payload.estado
    state.VehiculoActual.Marca = payload.marca
    state.VehiculoActual.Modelo = payload.modelo
    state.VehiculoActual.Motor = payload.motor
    state.VehiculoActual.Nombre = payload.nombre
    state.VehiculoActual.Patente = payload.patente
    state.VehiculoActual.Tipo = payload.tipo
    state.VehiculoActual.Titular = payload.titular
    state.VehiculoActual.Voltaje = payload.voltaje
  },
  [ORIGEN_MAPA] (state) {
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
    state.eventos = []
    state.reportes.map(p => {
      datasetAux.push(p.vel)
      labelsAux.push(p.fec)
      if (p.evt !== '11' && p.evt !== '10') {  // ACA HAY QUE DEFINIR TODOS LOS EVENTOS QUE QUEREMOS QUE VEA EL CLIENTE... POR AHORA SOLO FILTRA LOS REPORTES EN CONTACTO Y SIN CONTACTO
        // console.log(p.evt)
        state.eventos.push(p)
      }
    })
    state.graficaData = {
      datalabel: 'Velocidad',
      dataset: datasetAux,
      labels: labelsAux
    }
  }
}
