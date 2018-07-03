<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card
        class="elevation-5"
        >
          <v-card-title>
            <h2>LOG de reportes</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items= "this.$store.state.reporteLog"
            :search="search"
            :rows-per-page-items="[10, 50, 100]"
          >
          <!-- :rows-per-page="100" -->
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
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              No se encontro resultado para "{{ search }}"
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <br>
        <v-btn @click="actualizar">Actualizar</v-btn>
        <br>
        <br>
        <v-progress-circular indeterminate v-bind:width="10" v-bind:size="25" color="teal darken-1 " v-show="showLoaderLog"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
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
      search: '',
      headers: [
        {
          text: 'Fecha servidor',
          align: 'left',
          sortable: true,
          value: 'FechaServidor'
        },
        // {
        //   text: 'IP',
        //   align: 'left',
        //   sortable: true,
        //   value: 'IP'
        // },
        // {
        //   text: 'Puerto',
        //   align: 'left',
        //   sortable: true,
        //   value: 'Puerto'
        // },
        {
          text: 'Encabezado',
          align: 'left',
          sortable: true,
          value: 'enc'
        },
        {
          text: 'Fecha',
          align: 'left',
          sortable: true,
          value: 'fec'
        },
        {
          text: 'Hora',
          align: 'left',
          sortable: true,
          value: 'hor'
        },
        {
          text: 'Latitud',
          align: 'left',
          sortable: true,
          value: 'lat'
        },
        {
          text: 'Longitud',
          align: 'left',
          sortable: true,
          value: 'lon'
        },
        {
          text: 'Velocidad',
          align: 'left',
          sortable: true,
          value: 'vel'
        },
        {
          text: 'Direccion',
          align: 'left',
          sortable: true,
          value: 'dir'
        },
        {
          text: 'GPS',
          align: 'left',
          sortable: true,
          value: 'gps'
        },
        {
          text: 'Edad',
          align: 'left',
          sortable: true,
          value: 'eda'
        },
        {
          text: 'Señal',
          align: 'left',
          sortable: true,
          value: 'csq'
        },
        {
          text: 'Entradas',
          align: 'left',
          sortable: true,
          value: 'dig'
        },
        {
          text: 'Evento',
          align: 'left',
          sortable: true,
          value: 'evt'
        },
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id_e'
        },
        {
          text: 'Mensaje',
          align: 'left',
          sortable: true,
          value: 'nmg'
        }
      ]
    }
  }
}
</script>
