<template>
  <v-container grid-list-md style="height: 100%">
    <v-layout row wrap style="height: 100%">
      <v-flex xs12 style="height: 50%" id="mapa">
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
            :lat-lng="[reporte.lat, reporte.lon]"
            v-for="(reporte, i) in $store.state.reportes"
          >
            <!-- <v-popup :content="reporte.id"></v-popup> -->
          </v-marker>
        </v-map>
      </v-flex>
      <v-flex xs12 style="height: 10%">
        <div style="position: relative; overflow: hidden;">
          <v-card
            absolute
            color="blue-grey"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques"
          >
            <v-layout>
              <v-flex xs6>
                <v-btn flat  @click="e2 = 0">
                  <!-- <span>Datos</span> -->
                  <v-icon>directions_car</v-icon>
                </v-btn>
                <v-btn flat  @click="e2 = 1">
                  <!-- <span>Graficas</span> -->
                  <v-icon>timeline</v-icon>
                </v-btn>
                <v-btn flat  @click="e2 = 2">
                  <!-- <span>Eventos</span> -->
                  <v-icon>library_books</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs6 text-xs-right>
              <v-btn flat @click.stop="printPanelVehiculo">
                <!-- <span>Imprimir</span> -->
                <v-icon>print</v-icon>
              </v-btn>
              <v-btn flat @click.stop="volverMapa">
                <!-- <span>Cerrar</span> -->
                <v-icon>close</v-icon>
              </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
          <div
            class="scroll-y"
            id="scrolling-techniques"
          >
            <v-container v-if="e2 === 0">
              <v-layout row wrap>
                <v-flex lg4 xs12>
                  <v-card
                    style="height: 100%"
                    transition="slide-y-reverse-transition"
                    class="elevation-2"
                  >
                    <v-card-title>
                      <!-- <v-container fill-height fluid> -->
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline">Vehiculo</span>
                          </v-flex>
                        </v-layout>
                      <!-- </v-container> -->
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Nombre:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoNombre}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Patente:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoPatente}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Modelo:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoModelo}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Marca:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoMarca}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Tipo:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoTipo}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Color:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoColor}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Equipo:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoEquipo}}</span>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <!-- <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="orange">Editar</v-btn>
                    </v-card-actions> -->
                  </v-card>
                </v-flex>

                <v-flex lg4 xs12>
                  <v-card
                    style="height: 100%"
                    transition="slide-y-reverse-transition"
                    class="elevation-2"
                  >
                    <v-card-title>
                      <!-- <v-container fill-height fluid> -->
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline">Aseguradora</span>
                          </v-flex>
                        </v-layout>
                      <!-- </v-container> -->
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Empresa:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoNombre}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Numero:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoPatente}}</span>
                        </v-flex>
                      </v-layout>
                      <v-layout row align-center>
                        <v-flex xs6 text-xs-center>
                          <span class="title">Tipo:</span>
                        </v-flex>
                        <v-flex xs6>
                          <span class="subheading blue-grey--text">{{panelVehiculoModelo}}</span>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <!-- <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="orange">Editar</v-btn>
                    </v-card-actions> -->
                  </v-card>
                </v-flex>

                <v-flex lg4 xs12>
                  <v-card
                    style="height: 100%"
                    transition="slide-y-reverse-transition"
                    class="elevation-2"
                  >
                    <v-form v-model="valid" ref="form" lazy-validation>
                      <v-card-title>
                        <!-- <v-container fill-height fluid> -->
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline">Periodo</span>
                            </v-flex>
                          </v-layout>
                        <!-- </v-container> -->
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-layout row align-center>
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
                          <!-- <v-flex xs6 text-xs-center>
                            <span class="title">Numero:</span>
                          </v-flex>
                          <v-flex xs6>
                            <span class="subheading">{{panelVehiculoPatente}}</span>
                          </v-flex> -->
                        </v-layout>
                        <v-layout row align-center>
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
                          <!-- <v-flex xs6 text-xs-center>
                            <span class="title">Numero:</span>
                          </v-flex>
                          <v-flex xs6>
                            <span class="subheading">{{panelVehiculoPatente}}</span>
                          </v-flex> -->
                        </v-layout>
                        <v-layout row align-center>
                          <v-flex text-xs-center>
                            <v-progress-circular indeterminate v-bind:width="10" v-bind:size="20" color="teal darken-1 " v-show="showLoaderReporte"></v-progress-circular>
                          </v-flex>
                        </v-layout>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="consultar_reportes" color="blue-grey">Aceptar</v-btn>
                        <v-btn flat @click="clear" color="blue-grey">Borrar</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

            <v-container v-else-if="e2 === 1">
                <v-layout>
                  <v-flex lg12>
                    <v-container  id="grafica">
                      <!-- <canvas id="mycanvas" count="2"></canvas> -->
                      <!-- <chartjs-line :datalabel="'first'" :linetension="0" target="mycanvas"></chartjs-line> -->
                      <!-- <chartjs-line :datalabel="'second'" :data="[50, 40, 90, 60]" target="mycanvas"></chartjs-line> -->
                      <chartjs-line
                        :datalabel="this.$store.state.graficaData.datalabel"
                        :labels="this.$store.state.graficaData.labels"
                        :data="this.$store.state.graficaData.dataset"
                        :height="80"
                        :fill="true"
                        :bind="true"
                        :backgroundcolor="'rgba(75,192,192,0.1)'"
                        :beginzero="true"
                      ></chartjs-line>
                    </v-container>
                  </v-flex>
                </v-layout>
              <!-- </v-form> -->
            </v-container>

            <v-container v-else-if="e2 === 2">
              <!-- <span class="title">Eventos</span>
              <br>
              <br> -->
              <!-- hide-actions -->
              <v-data-table
                v-bind:headers="headers"
                :rows-per-page-items= [8]
                :items="this.$store.state.eventos"
                hide-headers
                class="elevation-2"
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-center">{{ props.item.fecserv }}</td>
                  <!-- <td class="text-xs-center">{{ props.item.ip }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.puerto }}</td> -->
                  <td class="text-xs-center">{{ props.item.enc }}</td>
                  <td class="text-xs-center">{{ props.item.fec }}</td>
                  <td class="text-xs-center">{{ props.item.hor }}</td>
                  <td class="text-xs-center">{{ props.item.lat }}</td>
                  <td class="text-xs-center">{{ props.item.lon }}</td>
                  <!-- <td class="text-xs-center">{{ props.item.vel }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.dir }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.gps }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.eda }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.csq }}</td> -->
                  <!-- <td class="text-xs-center">{{ props.item.dig }}</td> -->
                  <td class="text-xs-center">{{ props.item.evt }}</td>
                  <td class="text-xs-center">{{ props.item.id_e }}</td>
                  <td class="text-xs-center">{{ props.item.nmg }}</td>
                </template>
              </v-data-table>
            </v-container>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 style="height: 50%">
        <!-- <v-card
          style="height: 100%"
          transition="slide-y-reverse-transition"
          class="elevation-2"
        > -->

          <!-- <br>
          <br>
          <v-bottom-nav
            absolute
            shift
            color="white"
            :value="true"
            :active.sync="e2"
          >
            <v-btn flat color="teal">
              <span>Datos</span>
              <v-icon>directions_car</v-icon>
            </v-btn>
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
          </v-bottom-nav> -->
        <!-- </v-card> -->
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
import pdfMake from 'pdfmake/build/pdfmake.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'

import html2canvas from 'html2canvas'       // FUNCIONA BIEN, SE LO ESTA USANDO PARA HACER LAS IMAGENES DE LAS GRAFICAS... Y LAS DE LOS MAPAS PERO NO SALEN LOS MARKERS EN LA IMG..
// import leafletImage from 'leaflet-image' //  VER SI NO SE USA Y ELIMINAR DE LAS DEPENDENCIAS... PARA GENERERAR LA IMAGEN DEL MAPA... TODAVIA NO SE LOGRO HACERLO ANDAR...

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
  },
  methods: {
    printPanelVehiculo () {
      pdfMake.vfs = pdfFonts.pdfMake.vfs
      html2canvas(document.querySelector('#grafica'), {useCORS: true, imageTimeout: 15000})
      .then(function (canvas) {
        var img = canvas.toDataURL('image/png')
        var docDefinition = {
          content: [
            'This is an sample PDF printed with pdfMake',
            {
              image: img,
              width: 500
            }
          ]
        }
        // document.write('<img src="' + img + '"/>')
        pdfMake.createPdf(docDefinition).download('optionalName.pdf')
      })
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
            equipoId: '21128',            // TERMINAR LA FUNCION, TIENE QUE INGRESAR EL ID ESPECIFICO PARA CADA EQUIPO, AHORA ESTA FIJO SOLAMENTE PARA PRUEBAS
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
      e2: 0,
      icon,
      title: 'LARTEC',
      headers: [
        {
          text: 'Fecha servidor',
          align: 'left',
          sortable: false,
          value: 'FechaServidor'
        },
        // {
        //   text: 'IP',
        //   align: 'left',
        //   sortable: false,
        //   value: 'IP'
        // },
        // {
        //   text: 'Puerto',
        //   align: 'left',
        //   sortable: false,
        //   value: 'Puerto'
        // },
        {
          text: 'Encabezado',
          align: 'left',
          sortable: false,
          value: 'enc'
        },
        {
          text: 'Fecha',
          align: 'left',
          sortable: false,
          value: 'fec'
        },
        {
          text: 'Hora',
          align: 'left',
          sortable: false,
          value: 'hor'
        },
        {
          text: 'Latitud',
          align: 'left',
          sortable: false,
          value: 'lat'
        },
        {
          text: 'Longitud',
          align: 'left',
          sortable: false,
          value: 'lon'
        },
        // {
        //   text: 'Velocidad',
        //   align: 'left',
        //   sortable: false,
        //   value: 'vel'
        // },
        // {
        //   text: 'Direccion',
        //   align: 'left',
        //   sortable: false,
        //   value: 'dir'
        // },
        // {
        //   text: 'GPS',
        //   align: 'left',
        //   sortable: false,
        //   value: 'gps'
        // },
        // {
        //   text: 'Edad',
        //   align: 'left',
        //   sortable: false,
        //   value: 'eda'
        // },
        // {
        //   text: 'Señal',
        //   align: 'left',
        //   sortable: false,
        //   value: 'csq'
        // },
        // {
        //   text: 'Entradas',
        //   align: 'left',
        //   sortable: false,
        //   value: 'dig'
        // },
        {
          text: 'Evento',
          align: 'left',
          sortable: false,
          value: 'evt'
        },
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id_e'
        },
        {
          text: 'Mensaje',
          align: 'left',
          sortable: false,
          value: 'nmg'
        }
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
