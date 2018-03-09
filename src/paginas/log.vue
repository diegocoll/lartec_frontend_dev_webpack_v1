<template>
  <v-layout>
    <v-container>
      <v-layout row align-center>
        <v-flex text-xs-left>
          <h2>LOG de Reportes</h2>
        </v-flex>
        <v-flex text-xs-right>
          <v-progress-circular indeterminate v-bind:width="10" v-bind:size="25" color="teal darken-1 " v-show="showLoaderLog"></v-progress-circular>
          <v-btn @click="actualizar">Actualizar</v-btn>
        </v-flex>
      </v-layout>
      <!-- <v-layout row align-center>
      </v-layout> -->
      <br>
      <!-- hide-actions -->
      <v-data-table
        v-bind:headers="headers"
        :rows-per-page-items= [12]
        :items="this.$store.state.reporteLog"
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
          <td class="text-xs-center">{{ props.item.vel }}</td>
          <td class="text-xs-center">{{ props.item.dir }}</td>
          <td class="text-xs-center">{{ props.item.gps }}</td>
          <td class="text-xs-center">{{ props.item.eda }}</td>
          <td class="text-xs-center">{{ props.item.csq }}</td>
          <td class="text-xs-center">{{ props.item.dig }}</td>
          <td class="text-xs-center">{{ props.item.evt }}</td>
          <td class="text-xs-center">{{ props.item.id_e }}</td>
          <td class="text-xs-center">{{ props.item.nmg }}</td>
        </template>
      </v-data-table>
    </v-container>
  </v-layout>
</template>

<script>
// LIBRERIAS
// URL
// CSS

export default {

  computed: {
    showLoaderLog () {
      // Loading spinner
      return this.$store.state.showLoaderLog
    }
  },
  methods: {
    actualizar () {
      this.$store.dispatch('loadReporteLog')
    }
  },
  data () {
    return {
      // ------------------------------------ MODELOS
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
        {
          text: 'Velocidad',
          align: 'left',
          sortable: false,
          value: 'vel'
        },
        {
          text: 'Direccion',
          align: 'left',
          sortable: false,
          value: 'dir'
        },
        {
          text: 'GPS',
          align: 'left',
          sortable: false,
          value: 'gps'
        },
        {
          text: 'Edad',
          align: 'left',
          sortable: false,
          value: 'eda'
        },
        {
          text: 'Señal',
          align: 'left',
          sortable: false,
          value: 'csq'
        },
        {
          text: 'Entradas',
          align: 'left',
          sortable: false,
          value: 'dig'
        },
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
