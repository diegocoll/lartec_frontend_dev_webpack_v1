<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card
        class="elevation-5"
        >
          <v-card-title>
            <h2>Lista de vehículos</h2>
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
            :items= "this.$store.state.vehiculos"
            :search="search"
            :rows-per-page-items="[10, 50, 100]"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.nombre }}</td>
              <td class="text-xs-center">{{ props.item.patente }}</td>
              <td class="text-xs-center">{{ props.item.modelo }}</td>
              <td class="text-xs-center">{{ props.item.marca }}</td>
              <td class="text-xs-center">{{ props.item.tipo }}</td>
              <td class="text-xs-center">{{ props.item.color }}</td>
              <td class="text-xs-center">{{ props.item.estado }}</td>
              <td class="text-xs-center">{{ props.item.chofer }}</td>
              <!-- <td class="text-xs-center">{{ props.item.titular }}</td> -->
              <!-- <td class="text-xs-center">{{ props.item.chasis }}</td>
              <td class="text-xs-center">{{ props.item.motor }}</td> -->
              <td class="text-xs-center">{{ props.item.voltaje }}</td>
              <td class="text-xs-center">{{ props.item.empresaId }}</td>
              <td class="text-xs-center">{{ props.item.equipoId }}</td>
              <td class="text-xs-center">{{ props.item.fec_crea }}</td>
              <td class="text-xs-center">{{ props.item.fec_modi }}</td>
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
      <v-flex xs12>
        <br>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="grey" dark class="mb-2">Nuevo vehículo</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.nombre" label="Nombre"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.patente" label="Patente"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.modelo" label="Modelo"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.marca" label="Marca"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.tipo" label="Tipo"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.color" label="Color"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.estado" label="Estado"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedVehiculo.chofer" label="Chofer"></v-text-field>
                  </v-flex>
                  <!-- <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedVehiculo.titular" label="Titular"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedVehiculo.chasis" label="Chasis"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedVehiculo.motor" label="Motor"></v-text-field>
            </v-flex> -->
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedVehiculo.voltaje" label="Voltaje"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedVehiculo.empresaId" label="Empresa"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedVehiculo.equipoId" label="Equipo"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
        <v-btn color="blue darken-1" flat @click.native="save">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo vehículo' : 'Editar vehículo'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    // actualizar () {
    //   this.$store.dispatch('loadVehiculos')
    // }
    editItem (item) {
      this.editedIndex = this.$store.state.vehiculos.indexOf(item)
      this.editedVehiculo = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.$store.state.vehiculos.indexOf(item)
      confirm('Seguro que desea borrar este vehículo?') && this.$store.state.vehiculos.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedVehiculo = Object.assign({}, this.defaultVehiculo)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.$store.state.vehiculos[this.editedIndex], this.editedVehiculo)
      } else {
        this.$store.state.vehiculos.push(this.editedVehiculo)
      }
      this.close()
    }
  },
  data () {
    return {
      // ------------------------------------ MODELOS
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: true,
          value: 'nombre'
        },
        {
          text: 'Patente',
          align: 'left',
          sortable: true,
          value: 'patente'
        },
        {
          text: 'Modelo',
          align: 'left',
          sortable: true,
          value: 'modelo'
        },
        {
          text: 'Marca',
          align: 'left',
          sortable: true,
          value: 'marca'
        },
        {
          text: 'Tipo',
          align: 'left',
          sortable: true,
          value: 'tipo'
        },
        {
          text: 'Color',
          align: 'left',
          sortable: true,
          value: 'color'
        },
        {
          text: 'Estado',
          align: 'left',
          sortable: true,
          value: 'estado'
        },
        {
          text: 'Chofer',
          align: 'left',
          sortable: true,
          value: 'chofer'
        },
        // {
        //   text: 'Titular',
        //   align: 'left',
        //   sortable: true,
        //   value: 'titular'
        // },
        // {
        //   text: 'N° chasis',
        //   align: 'left',
        //   sortable: true,
        //   value: 'chasis'
        // },
        // {
        //   text: 'N° motor',
        //   align: 'left',
        //   sortable: true,
        //   value: 'motor'
        // },
        {
          text: 'Voltaje',
          align: 'left',
          sortable: true,
          value: 'voltaje'
        },
        {
          text: 'Empresa',
          align: 'left',
          sortable: true,
          value: 'empresaId'
        },
        {
          text: 'Equipo',
          align: 'left',
          sortable: true,
          value: 'equipoId'
        },
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
        {
          text: 'Acciones',
          align: 'left',
          sortable: false,
          value: 'accion'
        }
      ],
      editedIndex: -1,
      editedVehiculo: {
        nombre: '',
        patente: '',
        modelo: '',
        marca: '',
        tipo: '',
        color: '',
        estado: '',
        chofer: '',
        // titular: '',
        // chasis: '',
        // motor: '',
        voltaje: '',
        empresaId: '',
        equipoId: ''
      },
      defaultVehiculo: {
        nombre: '',
        patente: '',
        modelo: '',
        marca: '',
        tipo: '',
        color: '',
        estado: '',
        chofer: '',
        // titular: '',
        // chasis: '',
        // motor: '',
        voltaje: '',
        empresaId: '',
        equipoId: ''
      }
    }
  }
}
</script>
