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
            :icon="icon"
            :lat-lng="[equipo.lat, equipo.lon]"
            v-for="(equipo, i) in $store.state.equipos"
          >
            <v-popup :content="equipo.id"></v-popup>
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

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
// import GraficaLineal from '../components/grafica_lineal'

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
    let icon = window.L.icon(Object.assign({},
      window.L.Icon.Default.prototype.options,
      {iconUrl, shadowUrl}
    ))
    return {
      icon,
      title: 'LARTEC'
    }
  }
}
</script>

<style media="screen">
.mapa{
  z-index: 0;
}
</style>
