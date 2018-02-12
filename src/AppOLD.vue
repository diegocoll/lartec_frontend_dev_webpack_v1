<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-toolbar flat class="transparent">
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{$store.state.user.email}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-divider></v-divider>
        <v-subheader>General</v-subheader>
        <v-list-tile
          router
          :to="menu.to"
          :key="i"
          v-for="(menu, i) in menus"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="menu.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="menu.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>Equipos</v-subheader>
        <v-list-tile
          router
          :to="equipo.to"
          :key="i"
          v-for="(equipo, i) in equipos"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="equipo.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="equipo.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>Vehiculos</v-subheader>
        <v-list-tile
          router
          :to="vehiculo.to"
          :key="i"
          v-for="(vehiculo, i) in vehiculos"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="vehiculo.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="vehiculo.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      light
      dense
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!-- <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      menus: [
        { title: 'Principal', icon: 'dashboard', to: '/dashboard' },
        { title: 'Mapa', icon: 'bubble_chart', to: '/mapa' },
        { title: 'Feddback', icon: 'question_answer', to: '/feedback' }
      ],
      equipos: [
        { title: 'equipo1', icon: 'dvr', to: '/equipo/01' },
        { title: 'equipo2', icon: 'dvr', to: '/equipo/02' }
      ],
      vehiculos: [
        { title: 'vehiculo1', icon: 'directions_car', to: '/vehiculo/01' },
        { title: 'vehiculo2', icon: 'directions_car', to: '/vehiculo/02' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LARTEC'
    }
  },
  name: 'App'
}
</script>
