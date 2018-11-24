<template>
  <v-app>

    <!-- MENU DESPLEGABLE IZQUIERDO ________________________________________ -->

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      disable-route-watcher
      fixed
      app
      id="MenuIzquierdo"
    >
      <!-- BARRA SUPERIOR DEL MENU IZQUIERDO _______________________________ -->
      <v-toolbar>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <!-- HACER QUE SALGA LA IMAGEN DEL USUARIO -->
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{$store.state.user.email}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <!-- MENU PRINCIPAL DE USUARIO _______________________________________ -->

      <v-list>
        <v-subheader>General</v-subheader>
        <v-list-tile
          router
          :to="menu.to"
          :key="i"
          @click.stop="rightDrawer = false"
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

      <!-- MENU DE ADMINISTRADOR ___________________________________________ -->

      <!-- HACER QUE TODA LA SECCION DE ABAJO APARESCA CUANDO EL USUARIO ES ADMINISTRADOR. -->
      <v-divider></v-divider>
      <v-list>
        <v-subheader>Administrador</v-subheader>
        <v-list-tile
          router
          :to="menu.to"
          :key="i"
          @click.stop="rightDrawer = false"
          v-for="(menu, i) in menusAdmin"
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

      <!-- LISTA DE VEHICULOS DEL USUARIO __________________________________ -->

      <v-divider></v-divider>
      <v-list>
        <v-subheader>Vehiculos</v-subheader>
        <v-list-tile
          router
          :to="'/vehiculo/'+vehiculo.patente"
          :key="i"
          @click.stop="mostrarVehiculo(vehiculo),rightDrawer = true"
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

      <!-- LA SECCION DE ABAJO ES PARA MOSTRAR LOS QUIPOS EN LA BARRA IZQUIERDA
      SE ANULO CUANDO SE IMPLEMENTO UN PAGINA PARA MOSTRARLOS Y USANDO PRIVILEGIOS -->

      <!-- <v-divider></v-divider>
      <v-list>
        <v-subheader>Equipos</v-subheader>
        //:to="'/equipo/'+equipo.equipo_id"
        //@click="mostrarPanelVehiculo(equipo)"
        <v-list-tile
        router
        :key="i"
        v-for="(equipo, i) in $store.state.equipos"
        exact
        >
        <v-list-tile-action>
          <v-icon>dvr</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="equipo.id"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list> -->

    </v-navigation-drawer>

    <!-- BARRA SUPERIOR ____________________________________________________ -->

    <v-toolbar
      app
      :clipped-left="clipped"
      id="BarraSuperior"
    >
    <!-- dense // Es para hacer fina la barra superior, va dentro de la etiqueta superior-->

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
      <v-toolbar-title v-text="titulo"></v-toolbar-title>
      <v-toolbar-title><span v-text="subtitulo" class="grey--text body-1"></span></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>

    <!-- CONTENIDO DE PAGINA _______________________________________________ -->

    <v-content>
      <router-view/>
    </v-content>

    <!-- MENU DESPLEGABLE DERECHO __________________________________________ -->

    <!-- :width="350" -->
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      :right="right"
      v-model="rightDrawer"
      enable-resize-watcher
      disable-route-watcher
      fixed
      app
      id="MenuDerecho"
    >
      <!-- BARRA SUPERIOR DEL MENU _________________________________________ -->

      <v-toolbar>
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn> -->
        <!-- <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn>
        <v-btn icon @click.stop="fixed = !fixed">
          <v-icon>remove</v-icon>
        </v-btn> -->
        <!-- <v-toolbar-title v-text="">Patente</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn icon  @click.stop="" :to="'/vehiculo/'+VehiculoActual.Patente">
          <v-icon class="grey--text">map</v-icon>
        </v-btn>
        <v-btn icon  @click.stop="" :to="'/vehiculo/'+VehiculoActual.Patente+'/graficas'">
          <v-icon class="grey--text">timeline</v-icon>
        </v-btn>
        <v-btn icon @click.stop="e2 = 0">
          <v-icon class="grey--text">directions_car</v-icon>
        </v-btn>
        <v-btn icon @click.stop="e2 = 1">
          <v-icon class="grey--text">event</v-icon>
        </v-btn>
        <v-btn icon  @click.stop="" :to="'/vehiculo/'+VehiculoActual.Patente+'/informe'">
          <v-icon class="grey--text">library_books</v-icon>
        </v-btn>
        <v-btn icon @click.stop="rightDrawer = false, mostrarMapa()">
          <v-icon class="grey--text">close</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- DATOS DEL VEHICULO ______________________________________________ -->

      <div v-if="e2 === 0">
        <v-list>
          <v-subheader>Vehículo</v-subheader>
          <!-- SE ELIMINO "NOMBRE" DEL MODELO -->
          <!-- <v-list-tile>
            <v-list-tile-title>Nombre: <span class="">{{VehiculoActual.Nombre}}</span></v-list-tile-title>
          </v-list-tile> -->
          <v-list-tile>
            <v-list-tile-title>Patente: <span class="grey--text">{{VehiculoActual.Patente}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Modelo: <span class="grey--text">{{VehiculoActual.Modelo}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Marca: <span class="grey--text">{{VehiculoActual.Marca}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Tipo: <span class="grey--text">{{VehiculoActual.Tipo}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Color: <span class="grey--text">{{VehiculoActual.Color}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Equipo: <span class="grey--text">{{VehiculoActual.EquipoId}}</span></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-subheader>Aseguradora</v-subheader>

          <v-list-tile>
            <v-list-tile-title>Empresa: <span class="grey--text">{{VehiculoActual.emp_seguro}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Numero: <span class="grey--text">{{VehiculoActual.num_poliza}}</span></v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Tipo: <span class="grey--text">{{VehiculoActual.tip_seguro}}</span></v-list-tile-title>
          </v-list-tile>

        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-subheader>Periodo</v-subheader>
          <v-list-tile>
            <span class="grey--text caption">(Por defecto se muestran los datos de las ultimas 24hs.)</span>
            <br>
          </v-list-tile>
          <v-list-tile>
            <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menuStart"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
              <v-text-field
              slot="activator"
              label="Fecha de inicio"
              v-model="dateStart"
              prepend-icon="event"
              readonly
              ></v-text-field>
              <v-date-picker v-model="dateStart" no-title scrollable actions>
                <template slot-scope="{ save, cancel }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                    <v-btn flat color="primary" @click="save">OK</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
          </v-list-tile>
          <v-list-tile>
            <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menuEnd"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
              <v-text-field
              slot="activator"
              label="Fecha de fin"
              v-model="dateEnd"
              prepend-icon="event"
              readonly
              ></v-text-field>
              <v-date-picker v-model="dateEnd" no-title scrollable actions>
                <template slot-scope="{ save, cancel }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                    <v-btn flat color="primary" @click="save">OK</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
          </v-list-tile>
          <v-list-tile text-xs-center>
            <v-btn  @click="consultar_reportes">Aceptar</v-btn>
            <v-btn  @click="clear">Borrar</v-btn>
          </v-list-tile>
        </v-list>
      </div>

      <!-- LISTA DE EVENTOS ________________________________________________ -->

      <div v-else-if="e2 === 1">
        <br>
        <v-stepper vertical non-linear class="elevation-0">
          <template v-for="(evento, i) in $store.state.eventos">
            <v-stepper-step color="green" :step="i+1" editable>
              <h3>{{evento.nombre}} <span class="grey--text text--lighten-1">({{evento.evt}})</span></h3>
              <small>{{evento.hor}} hs - {{evento.fec}}</small>
            </v-stepper-step>
            <v-stepper-content :step="i+1">
              <p>{{evento.vel}} vel - {{evento.dir}} dir</p>

              <p>{{evento.lat}} lat - {{evento.lon}} lon</p>

              <p>{{evento.gps}} GPS - {{evento.csq}} GSM</p>
            </v-stepper-content>
          </template>
        </v-stepper>
      </div>
    </v-navigation-drawer>

    <!-- PIE DE PAGINA _____________________________________________________ -->

    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer> -->

  </v-app>
</template>

<script>
export default {
  name: 'plataforma',
  computed: {
    // RENDEREA LOS DATOS DEL STORE EN LA VISTA CON LA VARIABLE "VehiculoActual"
    VehiculoActual () {
      return this.$store.state.VehiculoActual
    }
  },
  methods: {
    // CENTRA MAPA CUANDO SE CIELLA EL PANEL DERECHO
    mostrarMapa () {
      this.$store.commit('ORIGEN_MAPA')
      this.$router.push('/mapa')
    },
    mostrarVehiculo (vehiculo) {
      // ESTA FUNCION HAY QUE CAMBIARLA... ESTA SEGUN EL DISEÑO VIEJO...
      this.$store.commit('VEHICULO_ACTUAL', vehiculo)

      // CARGA LOS REPORTES DEL VEHICULO CUANDO SE PARIENTA EN LA LISTA DE LA IZQUIERDA.
      // PERO FALTA AGREGAR LA FUNCION QUE CARGUE SEGUN EL APRETADO.
      // ESTO SOLO CARGA PARA EL VEHICULO QUE FIGURA EN equipoId ..!!!!

      this.$store.dispatch('loadReportes',
        {
          equipoId: vehiculo.equipoId, // APARENTEMENTE ESTA RESULETO LO ANTERIOR CON ESTA LINEA

          // CONFIGURAR PARA QUE FUNCIONE POR PERIODOS DE FECHAS.!!!
          dateStart: Date.now(),
          dateEnd: Date.now()
        }
      )
    }
  },
  data () {
    return {
      // MENU IZQUIERDO
      clipped: false,
      drawer: true,
      fixed: false,
      dateStart: null,
      dateEnd: null,
      menus: [
        { title: 'Principal', icon: 'dashboard', to: '/dashboard' },
        { title: 'Mapa', icon: 'bubble_chart', to: '/mapa' },
        { title: 'Checking', icon: 'assignment', to: '/dashboard' },
        { title: 'Checkout', icon: 'assignment_turned_in', to: '/dashboard' },
        { title: 'Zonas', icon: 'view_quilt', to: '/zonas' },
        { title: 'Notificaciones', icon: 'notifications', to: '/notificaciones' },
        { title: 'Ajustes', icon: 'settings', to: '/ajustes' },
        { title: 'Feedback', icon: 'question_answer', to: '/feedback' }
      ],
      menusAdmin: [
        { title: 'Vehículos', icon: 'directions_car', to: '/vehiculos' },
        { title: 'Equipos', icon: 'developer_board', to: '/equipos' },
        { title: 'LOG', icon: 'code', to: '/log' }
      ],
      // MENU DERECHO
      e2: 0,
      right: true,
      rightDrawer: false,
      miniVariant: false,
      // TOOLBAR
      titulo: 'LARTEC',
      subtitulo: 'sistema de rastreo'
    }
  }
}
</script>

<!--
<script>
  export default {
    name: 'default' // id of the layout (required)
  }
</script> -->

<style>
@informe {
  size: A4;
  margin: 0;
}
@media print {
  #MenuDerecho, #MenuIzquierdo, #BarraSuperior{
   visibility: hidden;
 }
 #informe, #informe * {
   visibility: visible;
 }
 #informe {
   position: absolute;
   left: 0;
   top: 0;
 }
}
</style>
