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
      <v-toolbar flat>
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
      <v-divider></v-divider>
      <v-list>
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
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader>Vehiculos</v-subheader>
        <v-list-tile
          router
          :to="'/vehiculo/'+vehiculo.patente"
          :key="i"
          @click="mostrarPanelVehiculo(vehiculo)"
          v-for="(vehiculo, i) in $store.state.vehiculos"
          exact
        >
          <v-list-tile-action>
            <v-icon>directions_car</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="vehiculo.patente"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader>Equipos</v-subheader>
        <!-- :to="'/equipo/'+equipo.equipo_id" -->
        <!-- @click="mostrarPanelVehiculo(equipo)" -->
        <v-list-tile
        router
        :key="i"
        v-for="(equipo, i) in $store.state.equipos"
        exact
        >
        <v-list-tile-action>
          <!-- <v-icon v-html="equipo.icon">dvr</v-icon> -->
          <v-icon>dvr</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="equipo.equipo_id"></v-list-tile-title>
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
      persistent
      :width="500"
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
    </v-navigation-drawer> -->
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'plataforma',
  methods: {
    mostrarPanelVehiculo (vehiculo) {
      // console.log(vehiculo)
      this.$store.commit('OPEN_PANEL', vehiculo)
    }
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      menus: [
        { title: 'Principal', icon: 'dashboard', to: '/dashboard' },
        { title: 'Mapa', icon: 'bubble_chart', to: '/mapa' },
        { title: 'LOG', icon: 'code', to: '/log' },
        { title: 'Ajustes', icon: 'settings', to: '/ajustes' },
        { title: 'Feedback', icon: 'question_answer', to: '/feedback' }
      ],
      // right: true,
      // rightDrawer: false,
      miniVariant: false,
      title: 'LARTEC'
    }
  }
}
</script>


<!-- <template>
  <div id="app">
    <h1>DEFAULT</h1>
    <div class="container">
      <router-view />
    </div>
    <footer />
  </div>
</template>

<script>
  export default {
    name: 'default' // id of the layout (required)
  }
</script>

<style>
/* your style */
</style> -->
