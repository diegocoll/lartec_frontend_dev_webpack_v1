<template>
  <v-container fill-height>
    <v-layout wrap align-center>
      <v-flex text-xs-center md6 offset-md3 lg4 offset-lg4>
        <v-card class="elevation-15">
          <!-- <v-card-media
            height="200px"
            color="red"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media> -->
          <v-card-title primary-title class="teal darken-1 white--text">
            <div>
              <h3 class="headline mb-0">LOGIN</h3>
              <!-- <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
            </div>
          </v-card-title>
          <v-container fluid>
            <v-form v-model="valid" ref="form" lazy-validation>
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
                label="Password"
                v-model="password"
                type="password"
                :rules="passwordRules"
                :counter="8"
                required
              ></v-text-field>
              <!-- <v-btn
                @click="$store.commit('increment')"
              >
                {{ $store.state.counter }}
              </v-btn> -->
              <v-btn
                @click="submit"
                :disabled="!valid"
              >
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-container>
        </v-card>
        <v-container class="altura">
          <h3 class="white--text">{{ $store.state.statusLogin }}</h3>
          <v-progress-circular indeterminate v-bind:width="5" v-bind:size="50" color="teal darken-1 " v-show="showLoader"></v-progress-circular>
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
      (v) => !!v || 'E-mail is required',
      // eslint-disable-next-line
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      // eslint-disable-next-line
      (v) => !!v || 'Name is required',
      // eslint-disable-next-line
      (v) => v && v.length >= 8 || 'Name must be less than 10 characters'
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
