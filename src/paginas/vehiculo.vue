<template>
  <v-container grid-list-md style="height: 100%">
    <v-layout row wrap style="height: 100%">
      <v-flex xs12>
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
            :icon="defaultIcon"
            :lat-lng="[reporte.lat, reporte.lon]"
            v-for="(reporte, i) in $store.state.reportes"
          >
            <!-- <v-popup :content="reporte.id"></v-popup> -->
          </v-marker>
        </v-map>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

// ------------------------------------ LIBRERIAS

import Vue2Leaflet from 'vue2-leaflet'

// ------------------------------------ URL

// HAY QUE CAMBIAR EL DIRECCIONAMIENTO DE LAS IMAGENES, PORQUE NO VA A FUNCIONAR BIEN ASI. ESTA FORMA ES TEMPORARIA
import iconUrl from '../images/marker-icon.png'

// import iconUrl from 'leaflet/dist/images/marker-icon.png'
// import iconUrl from 'leaflet/dist/images/circulo-icon.png'
// import iconUrl from 'leaflet/dist/images/marker-icon2.png'

// import shadowUrl from '../images/marker-shadow.png'
// import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

// ------------------------------------ CSS

import 'leaflet/dist/leaflet.css'

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-popup': Vue2Leaflet.Popup,
    'v-icondefault': Vue2Leaflet.IconDefault,
    'v-marker': Vue2Leaflet.Marker
  },
  data () {
    // let icon = window.L.icon(Object.assign({},
    //     window.L.Icon.Default.prototype.options,
    //     {iconSize: [20], iconAnchor: [10, 30], iconUrl}
    //   ))
    return {
      defaultIcon: window.L.icon({
        iconUrl: iconUrl,
        // shadowUrl: shadowUrl,
        iconSize: [20, 35],
        iconAnchor: [12, 34]
        // shadowSize: [40, 25],
        // shadowAnchor: [14, 24].
        // popupAnchor: [-1, -35]
      })
    }
  }
}
</script>

<style media="screen">
.mapa{
  z-index: 0;
}
</style>
