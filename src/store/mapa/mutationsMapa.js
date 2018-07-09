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
        var vari = p.evt
        console.log(vari)
        switch (vari) {
        //   case 12:
        //     p.nombre = 'Contacto Colocado'
        //     break
        //   case 13:
        //     p.nombre = 'Contacto Quitado'
        //     break
        //   case 18:
        //     p.nombre = 'Exceso de Velocidad'
        //     break
        //   case 20:
        //     p.nombre = 'Desc. de Alim Principal'
        //     break
        //   case 21:
        //     p.nombre = 'Desc. de Alim Aux Ext'
        //     break
        //   case 22:
        //     p.nombre = 'Desc. de Alim Aux Int'
        //     break
        //   case 30:
        //     p.nombre = 'Adquisicion de GPS'
        //     break
        //   case 31:
        //     p.nombre = 'Registrado GSM'
        //     break
        //   case 32:
        //     p.nombre = 'Registrado Roaming'
        //     break
        //   case 40:
        //     p.nombre = 'Desconexion ANT GPS'
        //     break
        //   case 41:
        //     p.nombre = 'Desconexion ANT GSM'
        //     break
        //   case 42:
        //     p.nombre = 'Perdida GPS'
        //     break
        //   case 43:
        //     p.nombre = 'Reset GPS'
        //     break
        //   case 50:
        //     p.nombre = 'Activacion Corte'
        //     break
        //   case 51:
        //     p.nombre = 'Desactivacion Corte'
        //     break
          default:
            p.nombre = 'Desconocido'
        }
        p.nombre = 'NON'
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

// Pedido de Posicion 00
// Activación IN0 01
// Activación IN1 02
// Activación IN2 03
// Activación IN3 04
// Activación IN4 05

// Reporte en Contacto - Modo Normal 10
// Reporte sin Contacto - Modo Normal 11

// Contacto Colocado 12
// Contacto Quitado 13

// Reporte en Contacto - Modo Roaming 14
// Reporte sin Contacto - Modo Roaming 15

// Distancia recorrida - Modo Normal 16
// Distancia recorrida - Modo Roaming 17

// Exceso de Velocidad 18
// Cambio de Rumbo 19

// Desconexión de Alim Princ 20
// Desconexión de Alim Aux Ext 21
// Desconexión de Alim Aux Int 22

// Reporte Temperatura 23
// Temperatura fuera de Rango 24

// Reporte Odometro 25
// Adquisicion de GPS 30
// Registrado GSM 31
// Registrado Roaming 32
// Desconexion ANT GPS 40
// Desconexion ANT GSM 41
// Perdida GPS 42
// Reset GPS 43
// Activacion Corte 50
// Desactivacion Corte 51

// Activacion OUT1 52
// Desactivacion OUT1 53
// Activacion OUT2 54
// Desactivacion OUT2 55
