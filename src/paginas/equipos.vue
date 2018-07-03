<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card
        class="elevation-5"
        >
          <v-card-title>
            <h2>Lista de equipos</h2>
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
            :items= "this.$store.state.equipos"
            :search="search"
            :rows-per-page-items="[10, 50, 100]"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.id }}</td>
              <td class="text-xs-center">{{ props.item.ip }}</td>
              <td class="text-xs-center">{{ props.item.puerto }}</td>
              <td class="text-xs-center">{{ props.item.ip_serv }}</td>
              <td class="text-xs-center">{{ props.item.puerto_serv }}</td>
              <td class="text-xs-center">{{ props.item.estado }}</td>
              <td class="text-xs-center">{{ props.item.vehiculo }}</td>
              <td class="text-xs-center">{{ props.item.empresa }}</td>
              <!-- <td class="text-xs-center">{{ props.item.firmware }}</td>
              <td class="text-xs-center">{{ props.item.hard_serie }}</td>
              <td class="text-xs-center">{{ props.item.hard_marca }}</td>
              <td class="text-xs-center">{{ props.item.hard_version }}</td> -->
              <td class="text-xs-center">{{ props.item.numerosim1 }}</td>
              <td class="text-xs-center">{{ props.item.imeisim1 }}</td>
              <!-- <td class="text-xs-center">{{ props.item.numerosim2 }}</td>
              <td class="text-xs-center">{{ props.item.imeisim2 }}</td> -->
              <td class="text-xs-center">{{ props.item.fec_crea }}</td>
              <td class="text-xs-center">{{ props.item.fec_modi }}</td>
              <!-- <td class="text-xs-center">{{ props.item.fec_ulti }}</td> -->
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0" @click="editItem(props.item)">
                  <v-icon color="grey">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                  <v-icon color="grey">delete</v-icon>
                </v-btn>
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              No se encontro resultado para "{{ search }}"
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
      <!-- <v-flex xs12>
        <br>
        <v-btn @click="actualizar">Actualizar</v-btn>
        <br>
        <br>
        <v-progress-circular indeterminate v-bind:width="10" v-bind:size="25" color="teal darken-1 " v-show="showLoaderLog"></v-progress-circular>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
// LIBRERIAS
// URL
// CSS

export default {

  computed: {
    // showLoaderLog () {
    //   // Loading spinner
    //   return this.$store.state.showLoaderLog
    // }
  },
  methods: {
    // actualizar () {
    //   this.$store.dispatch('loadEquipos')
    // }
  },
  data () {
    return {
      // ------------------------------------ MODELOS
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        {
          text: 'IP',
          align: 'left',
          sortable: true,
          value: 'ip'
        },
        {
          text: 'Puerto',
          align: 'left',
          sortable: true,
          value: 'puerto'
        },
        {
          text: 'IP Serv',
          align: 'left',
          sortable: true,
          value: 'ip_serv'
        },
        {
          text: 'Puerto Serv',
          align: 'left',
          sortable: true,
          value: 'puerto_serv'
        },
        {
          text: 'Estado',
          align: 'left',
          sortable: true,
          value: 'estado'
        },
        {
          text: 'Vehiculo',
          align: 'left',
          sortable: true,
          value: 'vehiculo'
        },
        {
          text: 'Empresa',
          align: 'left',
          sortable: true,
          value: 'empresa'
        },
        // {
        //   text: 'Firmware',
        //   align: 'left',
        //   sortable: true,
        //   value: 'firmware'
        // },
        // {
        //   text: 'Hard serie',
        //   align: 'left',
        //   sortable: true,
        //   value: 'hard_serie'
        // },
        // {
        //   text: 'Hard marca',
        //   align: 'left',
        //   sortable: true,
        //   value: 'hard_marca'
        // },
        // {
        //   text: 'Hard version',
        //   align: 'left',
        //   sortable: true,
        //   value: 'hard_version'
        // },
        {
          text: 'Sim1',
          align: 'left',
          sortable: true,
          value: 'numerosim1'
        },
        {
          text: 'imei sim1',
          align: 'left',
          sortable: true,
          value: 'imeisim1'
        },
        // {
        //   text: 'Sim2',
        //   align: 'left',
        //   sortable: true,
        //   value: 'numerosim2'
        // },
        // {
        //   text: 'imei sim2',
        //   align: 'left',
        //   sortable: true,
        //   value: 'imeisim2'
        // },
        {
          text: 'Creado',
          align: 'left',
          sortable: true,
          value: 'fec_crea'
        },
        {
          text: 'Modificado',
          align: 'left',
          sortable: true,
          value: 'fec_modi'
        },
        // {
        //   text: 'Ultimo rep',
        //   align: 'left',
        //   sortable: true,
        //   value: 'fec_ulti'
        // }
        {
          text: 'Acciones',
          align: 'left',
          sortable: false,
          value: 'accion'
        }
      ]
    }
  }
}
</script>
