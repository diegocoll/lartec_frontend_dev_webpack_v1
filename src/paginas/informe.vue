<template>
  <v-container style="height: 100%" class="grey lighten-4">
    <br>
    <div style="height: 100%" class="informe" id="informe">
      <v-container grid-list-md text-xs-center style="height: 100%">
      <v-layout row wrap>
        <v-flex xs12>
          <br>
          <h1>Informe del vehiculo: <span class="grey--text">{{VehiculoActual.Patente}}</span> </h1>
          <br>
        </v-flex>
        <!-- <v-flex xs12>
          <v-divider></v-divider>
          <br>
        </v-flex> -->
        <v-flex xs6 class="grey lighten-4">
          <h3>Datos del Vehículo</h3>
        </v-flex>
        <v-flex xs6 class="grey lighten-4">
          <h3>Datos de la Aseguradora</h3>
        </v-flex>
        <v-flex xs3 class="grey lighten-5">
          <br>
          <p>Patente: <span class="grey--text">{{VehiculoActual.Patente}}</span></p>
          <p>Modelo: <span class="grey--text">{{VehiculoActual.Modelo}}</span></p>
          <p>Marca: <span class="grey--text">{{VehiculoActual.Marca}}</span></p>
        </v-flex>
        <v-flex xs3 class="grey lighten-5">
          <br>
          <p>Tipo: <span class="grey--text">{{VehiculoActual.Tipo}}</span></p>
          <p>Color: <span class="grey--text">{{VehiculoActual.Color}}</span></p>
          <p>Equipo: <span class="grey--text">{{VehiculoActual.EquipoId}}</span></p>
        </v-flex>
        <v-flex xs6 class="grey lighten-5">
          <br>
          <p>Empresa: <span class="grey--text">{{VehiculoActual.Nombre}}</span></p>
          <p>Numero: <span class="grey--text">{{VehiculoActual.Patente}}</span></p>
          <p>Tipo: <span class="grey--text">{{VehiculoActual.Modelo}}</span></p>
        </v-flex>
        <v-flex xs12 style="height: 10cm">
          <v-map
            :zoom="this.$store.state.mapaZoom"
            :center="[this.$store.state.mapaLatitud, this.$store.state.mapaLongitud]"
            :min-zoom="5"
            class="mapa"
            transition="slide-y-reverse-transition"
          >
            <v-tilelayer :url="this.$store.state.mapaUrl" :attribution="this.$store.state.mapaAttribution"></v-tilelayer>
            <!-- router
            :to="'/equipo/'+equipo.equipo_id" -->

            <!-- CUANDO SE CARGA LOS EQUIPOS Y SE ITERA ENTRE TODOS ELLOS, LA CONSOLA TIRA UN ERROR...
            SE DETECTO QUE EN LA DEFINICION DE :lat-lng ES DONDE SE PRODUCE EL ERROR, PORQUE AL REMPRAZARLO POR VALORES FIJO ANDA BIEN
            SE ESTIMA QUE EL PROBLE ES QUE AL CARGAR ALGUNOS DE LOS EQUIPOS LAS VARIABLES CORRESPONDIENTES ESTAN MAL SETEADAS... CONTROLAR..
            -
            EFECTIVAMENTE SUCEDE LO INDICADO ANTES... SE BORRARON TODOS LOS REPORTES Y SE CARGARON NUEVOS SIN NINGUN ERROR... REALIZAR ALGUNA FUNCION QUE PROTEJA DE ESTOS ERRORES.
            -->
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
        <v-flex xs12 style="height: 8cm">
          <!-- VELOCIDAD -->

          <v-container  id="grafica">
            <!-- <canvas id="mycanvas" count="2"></canvas> -->
            <!-- <chartjs-line :datalabel="'first'" :linetension="0" target="mycanvas"></chartjs-line> -->
            <!-- <chartjs-line :datalabel="'second'" :data="[50, 40, 90, 60]" target="mycanvas"></chartjs-line> -->
            <br>
            <chartjs-line
            :datalabel="this.$store.state.graficaData.datalabel"
            :labels="this.$store.state.graficaData.labels"
            :data="this.$store.state.graficaData.dataset"
            :height="100"
            :fill="true"
            :bind="true"
            :backgroundcolor="'rgba(75,192,192,0.1)'"
            :beginzero="true"
            ></chartjs-line>
          </v-container>

          <!-- ACELERACION -->
          <!-- SENSOR TEMPERATURA -->

        </v-flex>
        <v-flex xs12>
          <v-stepper non-linear class="elevation-0">
            <v-stepper-header>
              <!-- <template v-for="(evento, i) in $store.state.eventos">
                <v-stepper-step color="green" :step="i+1" editable>
                  <h3 v-text="evento.evt"></h3>
                  <small>{{evento.hor}}</small>
                  <small>{{evento.fec}}</small>
                </v-stepper-step>
                <v-divider></v-divider>
              </template> -->
            </v-stepper-header>
          </v-stepper>
        </v-flex>

        <!-- <v-flex xs12>
          <br>
          <v-divider></v-divider>
          <br>
        </v-flex> -->
      </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>

// ------------------------------------ LIBRERIAS

import Vue2Leaflet from 'vue2-leaflet'

// ------------------------------------ URL

import iconUrl from 'leaflet/dist/images/circulo-icon.png'
// import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

// ------------------------------------ CSS

import 'leaflet/dist/leaflet.css'

export default {
  computed: {
    // RENDEREA LOS DATOS DEL STORE EN LA VISTA CON LA VARIABLE "VehiculoActual"
    VehiculoActual () {
      return this.$store.state.VehiculoActual
    }
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-popup': Vue2Leaflet.Popup,
    'v-icondefault': Vue2Leaflet.IconDefault,
    'v-marker': Vue2Leaflet.Marker
  },
  data () {
    let icon = window.L.icon(Object.assign({},
        window.L.Icon.Default.prototype.options,
        {iconSize: [10, 10], iconUrl, iconAnchor: [5, 5]}
      ))
    return {
      icon  // SE USA PARA CARGAR LAS IMAGENES DE LOS ICONOS... ANDA MAS O MENOS... VER..!!
    }
  }
}
</script>

<style media="screen">
.mapa{
  z-index: 0;
}
.informe{
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  /* z-index: 10; */
}
</style>
