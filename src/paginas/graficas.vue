<template>
  <v-container grid-list-md style="height: 100%">
    <v-layout row wrap style="height: 100%">
      <!-- VELOCIDAD -->

      <v-container  id="grafica">
        <!-- <canvas id="mycanvas" count="2"></canvas> -->
        <!-- <chartjs-line :datalabel="'first'" :linetension="0" target="mycanvas"></chartjs-line> -->
        <!-- <chartjs-line :datalabel="'second'" :data="[50, 40, 90, 60]" target="mycanvas"></chartjs-line> -->
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

    </v-layout>
  </v-container>
</template>


<script>

// ------------------------------------------- LIBRERIAS

// ------------------------------------------- URL

// ------------------------------------------- CSS

export default {
  data () {
    return {

    }
  }
}
</script>

<style media="screen">
</style>
