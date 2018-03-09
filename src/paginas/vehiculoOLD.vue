<template>
  <v-container grid-list-md style="height: 100%">
    <v-layout row wrap style="height: 100%">
      <v-flex xs12 style="height: 50%">
        <v-map
          :zoom="this.$store.state.mapaZoom"
          :center="[this.$store.state.mapaLatitud, this.$store.state.mapaLongitud]"
          :min-zoom="5"
          class="mapa elevation-2"
          transition="slide-y-reverse-transition"
        >
          <v-tilelayer :url="this.$store.state.mapaUrl" :attribution="this.$store.state.mapaAttribution"></v-tilelayer>
          <!-- router
          :to="'/equipo/'+equipo.equipo_id" -->
          <v-marker
            :key="i"
            :icon="icon"
            :lat-lng="[equipo.lat, equipo.lon]"
            v-for="(equipo, i) in $store.state.equipos"
          >
            <v-popup :content="equipo.equipo_id"></v-popup>
          </v-marker>
        </v-map>
      </v-flex>
      <v-flex xs12 style="height: 50%">
        <v-card
          style="height: 100%"
          transition="slide-y-reverse-transition"
          class="elevation-2"
        >
          <v-container v-if="e2 === 0" fluid>
            <v-form v-model="valid" ref="form" lazy-validation>
              <!-- <span class="title">Datos del Vehiculo</span> -->
              <v-layout>
                <v-flex lg4>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Nombre:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoNombre"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Patente:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoPatente"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Modelo:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoModelo"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Marca:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoMarca"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex lg4>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Tipo:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoTipo"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Color:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoColor"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Chasis:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoChasis"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Motor:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoMotor"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex lg4>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Estado:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoEstado"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Voltaje:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoVoltaje"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex xs4 text-xs-center>
                      <span class="subheading">Equipo:</span>
                    </v-flex>
                    <v-flex xs8>
                      <!-- label="Name" -->
                      <v-text-field
                        v-model="panelVehiculoEquipo"
                        :rules="textRules"
                        :counter="18"
                        required
                        disabled
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-container>
                    <v-divider></v-divider>
                  </v-container>
                  <!-- <v-layout row align-center>
                    <v-flex text-xs-center>
                      <v-checkbox
                      label="Confirmacion"
                      v-model="checkbox"
                      :error-messages="checkboxErrors"
                      required
                      ></v-checkbox>
                    </v-flex>
                  </v-layout> -->
                  <v-layout row align-center>
                    <v-flex text-xs-center>
                      <!-- label="Name" -->
                      <v-btn @click="actualizar" disabled>Actualizar</v-btn>
                      <v-btn @click="clear" disabled>Borrar</v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
              <br>
              <br>
            </v-form>
          </v-container>

          <v-container v-else-if="e2 === 1">
            <!-- <v-form v-model="valid_report" ref="form" lazy-validation> -->
            <v-form v-model="valid" ref="form" lazy-validation>
              <!-- <span class="title">Graficas del Vehiculo</span> -->
              <v-layout>
                <v-flex lg4>
                  <!-- <br> -->
                  <v-layout row wrap>
                    <v-flex xs12>
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
                    </v-flex>
                    <v-flex xs12>
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
                    </v-flex>
                  </v-layout>
                  <br>
                  <v-divider></v-divider>
                  <br>
                  <v-layout row align-center>
                    <v-flex text-xs-center>
                      <v-btn @click="consultar_reportes">Aceptar</v-btn>
                      <v-btn @click="clear">Borrar</v-btn>
                    </v-flex>
                  </v-layout>
                  <br>
                  <v-layout row align-center>
                    <v-flex text-xs-center>
                      <v-progress-circular indeterminate v-bind:width="10" v-bind:size="20" color="teal darken-1 " v-show="showLoaderReporte"></v-progress-circular>
                    </v-flex>
                  </v-layout>
                  <!-- <br>
                  <br>
                  <br> -->
                </v-flex>
                <v-flex lg8>
                  <v-container class="conte_graf">
                    <!-- <canvas id="mycanvas" count="2"></canvas> -->
                    <!-- <chartjs-line :datalabel="'first'" :linetension="0" target="mycanvas"></chartjs-line> -->
                    <!-- <chartjs-line :datalabel="'second'" :data="[50, 40, 90, 60]" target="mycanvas"></chartjs-line> -->
                    <chartjs-line
                      :labels="this.$store.state.graficaData.labels"
                      :data="this.$store.state.graficaData.dataset"
                      :height="90"
                      :fill="true"
                      :bind="true"
                      :backgroundcolor="'rgba(75,192,192,0.1)'"
                      :beginzero="true"
                    ></chartjs-line>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>

          <v-container v-else-if="e2 === 2">
            <!-- <span class="title">Eventos</span>
            <br>
            <br> -->
            <!-- hide-actions -->
            <v-data-table
              v-bind:headers="headers"
              :rows-per-page-items= [4]
              :items="this.$store.state.reportes"
              hide-headers
              class="elevation-2"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.id_e }}</td>
                <td class="text-xs-right">{{ props.item.enc }}</td>
                <td class="text-xs-right">{{ props.item.fec }}</td>
                <td class="text-xs-right">{{ props.item.hor }}</td>
                <td class="text-xs-right">{{ props.item.vel }}</td>
                <td class="text-xs-right">{{ props.item.dir }}</td>
                <td class="text-xs-right">{{ props.item.evt }}</td>
                <td class="text-xs-right">{{ props.item.nmg }}</td>
              </template>
            </v-data-table>
          </v-container>
          <!-- <v-container v-else-if="e2 === 3">
            Not A/B/C
          </v-container> -->
          <!-- :color="computedColor" -->
          <v-bottom-nav
            absolute
            shift
            color="transparent"
            :value="true"
            :active.sync="e2"
          >
            <v-btn flat color="teal">
              <span>Datos</span>
              <v-icon>directions_car</v-icon>
            </v-btn>
            <!-- <v-btn flat color="teal">
              <span>Equipo</span>
              <v-icon>dvr</v-icon>
            </v-btn> -->
            <v-btn flat color="teal">
              <span>Graficas</span>
              <v-icon>timeline</v-icon>
            </v-btn>
            <v-btn flat color="teal">
              <span>Eventos</span>
              <v-icon>library_books</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="teal" @click.stop="printPanelVehiculo">
              <span>Imprimir</span>
              <v-icon>print</v-icon>
            </v-btn>
            <v-btn flat color="teal" @click.stop="volverMapa">
              <span>Cerrar</span>
              <v-icon>close</v-icon>
            </v-btn>
          </v-bottom-nav>
        </v-card>
        <!-- <v-card dark color="primary">
          <v-card-text>
            <h1>DATOS</h1>
          </v-card-text>
        </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>

// LIBRERIAS

import Vue2Leaflet from 'vue2-leaflet'

// URL

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

import 'leaflet/dist/leaflet.css'

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-popup': Vue2Leaflet.Popup,
    'v-icondefault': Vue2Leaflet.IconDefault,
    'v-marker': Vue2Leaflet.Marker

  },
  computed: {
    showLoaderReporte () {
      // Loading spinner
      return this.$store.state.showLoaderReporte
    },
    showPanelVehiculo () {
      // Loading spinner
      return this.$store.state.showPanelVehiculo
    },
    panelVehiculoNombre () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Nombre
    },
    panelVehiculoPatente () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Patente
    },
    panelVehiculoModelo () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Modelo
    },
    panelVehiculoMarca () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Marca
    },
    panelVehiculoTipo () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Tipo
    },
    panelVehiculoColor () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Color
    },
    panelVehiculoChasis () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Chasis
    },
    panelVehiculoMotor () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Motor
    },
    panelVehiculoEstado () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Estado
    },
    panelVehiculoVoltaje () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Voltaje
    },
    panelVehiculoEquipo () {
      // Loading spinner
      return this.$store.state.vehiculoPanel.Equipo
    }
    // ,
    // computedColor () {
    //   switch (this.e2) {
    //     case 0:
    //       return 'blue-grey'
    //     // break
    //     case 1:
    //       return 'teal'
    //     // break
    //     case 2:
    //       return 'brown'
    //     // break
    //     case 4:
    //       return 'brown lighten-1'
    //     // break
    //   }
    // }
  },
  methods: {
    printPanelVehiculo () {
      // Loading spinner
      // this.$store.commit('CLOSE_PANEL')
    },
    volverMapa () {
      // Loading spinner
      this.$store.commit('CLOSE_PANEL')
      this.$router.push('/mapa')
    },
    consultar_reportes () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('loadReportes',
          {
            equipoId: '5a74fe18283e8760e1182db3',
            dateStart: this.dateStart,
            dateEnd: this.dateEnd
            // select: this.select,
            // checkbox: this.checkbox
          }
        )
      //   .then(() => {
      //     // this.$store.dispatch('loadEquipos')
      //     // this.$store.dispatch('loadVehiculos')
      //     // this.$router.push('/mapa')
      //   }
      // ).catch(function (error) {
      //   console.log(error)
      // })
      }
    },
    actualizar () {
      if (this.$refs.form.validate()) {

      // axios.post('/api/submit', {
      //   name: this.name,
      //   email: this.email,
      //   select: this.select,
      //   checkbox: this.checkbox
      // })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  data () {
    let icon = window.L.icon(Object.assign({},
        window.L.Icon.Default.prototype.options,
        {iconUrl, shadowUrl}
      ))
    return {
      // ------------------------------------ MODELOS DEL FORMULARIO VEHICULO
      dateStart: null,
      dateEnd: null,
      menuStart: false,
      menuEnd: false,
      valid: true,
      valid_report: true,
      // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      // dataset: [65, 59, 80, 81, 56, 55, 40],
      textRules: [
        (v) => !!v || 'Texto requerido',
        // eslint-disable-next-line
        (v) => v && v.length <= 18 || 'Texto debe tener menos de 10 caracteres'
      ],
      checkbox: false,
      // ------------------------------------
      e2: 2,
      icon,
      title: 'LARTEC',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Sodium (mg)', value: 'sodium' },
        { text: 'Calcium (%)', value: 'calcium' },
        { text: 'Iron (%)', value: 'iron' }
      ]
    }
  }
}
</script>

<style media="screen">
.mapa{
  z-index: 0;
}
.conte_graf {
    margin:  10px 10px;
    /* height: 200px; */
    /* margin: */
  }
</style>
