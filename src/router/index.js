// ------------------------------------------- IMPORTACION DE LIBRERIAS

import Vue from 'vue'
import Router from 'vue-router'

// ------------------------------------------- PAGINAS

import Inicio from '@/paginas/inicio'
import Bienvenido from '@/paginas/bienvenido'
import Login from '@/paginas/login'
import Error from '@/paginas/error'

import Dashboard from '@/paginas/dashboard'
import Mapa from '@/paginas/mapa'
import Zonas from '@/paginas/zonas'
import Notificaciones from '@/paginas/notificaciones'
import Ajustes from '@/paginas/ajustes'
import Feedback from '@/paginas/feedback'
import Log from '@/paginas/log'

import Graficas from '@/paginas/graficas'
import Vehiculo from '@/paginas/vehiculo'
import Vehiculos from '@/paginas/vehiculos'
import Equipo from '@/paginas/equipo'
import Equipos from '@/paginas/equipos'
import Usuario from '@/paginas/usuario'

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
      path: '/Bienvenido',
      name: 'Bienvenido',
      component: Bienvenido
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
      path: '/Vehiculo/:id/Graficas',
      name: 'Graficas',
      component: Graficas,
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
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: Vehiculos,
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
      path: '/Equipos',
      name: 'Equipos',
      component: Equipos,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/Zonas',
      name: 'Zonas',
      component: Zonas,
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
      path: '/Notificaciones',
      name: 'Notificaciones',
      component: Notificaciones,
      meta: {
        layout: 'plataforma'
      }
    },
    {
      path: '/*',
      name: 'Error',
      component: Error,
      meta: {
        layout: 'error'
      }
    }
  ]
})
