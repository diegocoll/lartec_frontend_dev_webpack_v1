<template>
  <v-container fill-height>
    <v-layout wrap align-center>
      <v-flex text-xs-center md6 offset-md3 lg6 offset-lg3>
        <v-card class="elevation-20">
          <v-layout wrap>
            <v-flex lg6>
              <v-container>
                <br>
                <h1 class="grey--text">Login</h1>
                <br>
                <br>
                <!-- <v-divider></v-divider> -->
                <v-form v-model="valid" ref="form" lazy-validation>

                  <!-- VER SI ES NECESARIO PONER ESTE CAMPO PARA MEJORAR LA SEGURIDAD -->

                  <!-- <v-text-field
                    label="Username"
                    v-model="username"
                    :rules="nameRules"
                    :counter="10"
                    required
                  ></v-text-field> -->

                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    v-model="password"
                    type="password"
                    :rules="passwordRules"
                    :counter="8"
                    required
                  ></v-text-field>
                  <br>
                  <br>
                  <v-btn
                    @click="submit"
                    :disabled="!valid"
                  >
                    Aceptar
                  </v-btn>
                  <v-btn @click="clear">Borrar</v-btn>
                </v-form>
                <br>
                <br>
                <a href="http://www.google.com.ar" class="grey--text" style="text-decoration: none">Olvidaste la contraseña?</a>
                <br>
                <a href="http://www.lartec.com.ar" class="grey--text" style="text-decoration: none">www.lartec.com.ar</a>
                <br>
              </v-container>
            </v-flex>
            <v-flex lg6>
              <v-parallax src="/static/img/fondo_chico.png">
                  <br>
                  <br>
                  <h1 class="white--text">Novedades</h1>
                  <br>
                  <v-container class="text-lg-left">

                    <!-- AGREGAR CARGA DE LAS NOTICIAS DESDE LA BASE DE DATOS..!! -->

                    <h3 class="white--text">Actualización</h3>
                    <p class="white--text">Mejoras en el generación de informes.</p>
                    <h3 class="white--text">Nueva función</h3>
                    <p class="white--text">Delimitación de zonas.</p>
                    <h3 class="white--text">Actualización</h3>
                    <p class="white--text">Mejoras en la integración de equipos nuevos.</p>
                    <h3 class="white--text">Nuevo servicio</h3>
                    <p class="white--text">Asistencia remota al pasajero.</p>
                  </v-container>
              </v-parallax>
            </v-flex>
          </v-layout>
        </v-card>
        <v-container class="altura">
          <br>
          <img src="/static/img/lartec_texto.png" width="100px" alt="">
          <br>
          <br>
          <h3 class="white--text">{{ $store.state.statusLogin }}</h3>
          <v-progress-circular indeterminate v-bind:width="5" v-bind:size="30" color="teal darken-1 " v-show="showLoader"></v-progress-circular>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  layout: 'inicio',
  name: 'inicio',
  data: () => ({
    valid: false,
    // username: '',
    // nameRules: [
    //   // eslint-disable-next-line
    //   (v) => !!v || 'Name is required',
    //   // eslint-disable-next-line
    //   (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
    // ],
    email: '',
    emailRules: [
      // eslint-disable-next-line
      (v) => !!v || 'E-mail requerido',
      // eslint-disable-next-line
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El E-mail debe ser valido'
    ],
    password: '',
    passwordRules: [
      // eslint-disable-next-line
      (v) => !!v || 'Contraseña requerida',
      // eslint-disable-next-line
      (v) => v && v.length >= 8 || 'La contraseña tiene que ser de almenos 8 caracteres.'
    ]
    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4'
    // ],
    // checkbox: false
  }),
  computed: {
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('startlogin',
          {
            // MOFIFICAR LA DEBOLUCION DE LAS VARIABLES QUE MANDA EL SERVER, PARA NO TENER QUE REALIZAR UNA SEGUNDA CONSULTA.
            // username: this.username,
            email: this.email,
            password: this.password
            // select: this.select,
            // checkbox: this.checkbox
          }
        ).then(() => {
          this.$store.dispatch('loadEquipos')
          this.$store.dispatch('loadVehiculos')
          this.$router.push('/mapa')
        }
      ).catch(function (error) {
        console.log(error)
      })
      }
    },
    clear () {
      this.$refs.form.reset()
      // this.valid = false
    }
  }
}
</script>

<style>
.altura {
  padding-top: 30px;
  height: 100px;
}
</style>
