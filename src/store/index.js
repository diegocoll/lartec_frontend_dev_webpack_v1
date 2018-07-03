import Vue from 'vue'
import Vuex from 'vuex'

import { gettersLogin } from './login/gettersLogin'
import { mutationsLogin } from './login/mutationsLogin'
import { actionsLogin } from './login/actionsLogin'

import { gettersUser } from './usuario/gettersUser'
import { mutationsUser } from './usuario/mutationsUser'
import { actionsUser } from './usuario/actionsUser'

import { gettersEquipo } from './equipo/gettersEquipo'
import { mutationsEquipo } from './equipo/mutationsEquipo'
import { actionsEquipo } from './equipo/actionsEquipo'

// import { gettersVehiculo } from './vehiculo/gettersVehiculo'
import { mutationsVehiculo } from './vehiculo/mutationsVehiculo'
import { actionsVehiculo } from './vehiculo/actionsVehiculo'

// import { gettersEmpresa } from './empresa/gettersEmpresa'
// import { mutationsEmpresa } from './empresa/mutationsEmpresa'
// import { actionsEmpresa } from './empresa/actionsEmpresa'

// import { gettersMapa } from './mapa/gettersMapa'
import { mutationsMapa } from './mapa/mutationsMapa'
import { actionsMapa } from './mapa/actionsMapa'

// import { gettersLog } from './log/gettersLog'
import { mutationsLog } from './log/mutationsLog'
import { actionsLog } from './log/actionsLog'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // STATES
  state: {
    // -------------------- LOG
    reporteLog: [],
    showLoaderLog: false,
    // -------------------- MAPA
    mapaLatitud: -29.419531,
    mapaLongitud: -66.855920,
    mapaUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    mapaAttribution: 'lartec 2018',
    // mapaPanelHeight: 0,
    // mapaHeight: 100,
    mapaZoom: 13,
    // -------------------- PANEL VEHICULO
    // showPanelVehiculo: false,
    // vehiculoPanel: { // VIEJO.... NUEVO.. VehiculoActual
    VehiculoActual: {
      Chasis: '',
      Chofer: '',
      Color: '',
      EmpresaId: '',
      EquipoId: '',
      // Equipo: '',
      Estado: '',
      Marca: '',
      Modelo: '',
      Motor: '',
      Nombre: '',
      Patente: '',
      Tipo: '',
      Titular: '',
      Voltaje: ''
    },
    showLoaderReporte: false,
    reportes: [],
    eventos: [],
    graficaData: {
      datalabel: 'Velocidad',
      labels: [],
      dataset: []
    },
    // -------------------- LOGIN
    showLoader: false,
    statusLogin: '',                // esta variable se usa para confirma si el inicio fue sastifactorio o no (se usa en las mutaciones de LOGIN)
    // -------------------- USUARIO
    user: {
      nombre: '',
      email: '',
      accessToken: '',
      isLoggedIn: false
    },
    // -------------------- EQUIPOS
    equipo: {},
    equipos: [],
    // -------------------- VEHICULOS
    vehiculos: []
  },
  // GETTERS
  getters: Object.assign({}, gettersLogin, gettersUser, gettersEquipo),
  // MUTATIONS
  mutations: Object.assign({}, mutationsLogin, mutationsUser, mutationsEquipo, mutationsVehiculo, mutationsMapa, mutationsLog),
  // ACTIONS
  actions: Object.assign({}, actionsLogin, actionsUser, actionsEquipo, actionsVehiculo, actionsMapa, actionsLog)
})
