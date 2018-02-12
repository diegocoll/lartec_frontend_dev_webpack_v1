// ------------------------------------------- IMPORTACION DE LIBRERIAS

import Vue from 'vue'
import Router from 'vue-router'

// ------------------------------------------- PAGINAS

import Inicio from '@/paginas/inicio'
import Login from '@/paginas/login'
import Dashboard from '@/paginas/dashboard'
import Mapa from '@/paginas/mapa'
import Log from '@/paginas/log'
import Ajustes from '@/paginas/ajustes'
import Vehiculo from '@/paginas/vehiculo'
import Equipo from '@/paginas/equipo'
import Usuario from '@/paginas/usuario'
import Feedback from '@/paginas/feedback'
import error from '@/paginas/error'

// ------------------------------------------- COMPONENTES

// import HelloWorld from '@/components/HelloWorld'

// ------------------------------------------- RUTAS

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Mapa',
      name: 'Mapa',
      component: Mapa,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Log',
      name: 'Log',
      component: Log,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Ajustes',
      name: 'Ajustes',
      component: Ajustes,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Vehiculo/:id',
      name: 'Vehiculo',
      component: Vehiculo,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Equipo/:id',
      name: 'Equipo',
      component: Equipo,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Usuario/:id',
      name: 'Usuario',
      component: Usuario,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/*',
      name: 'Error',
      component: error,
      meta: {
        layout: 'error'
      }
    }
  ]
})
