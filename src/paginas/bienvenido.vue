<template>
  <v-container fill-height>
    <v-layout wrap align-center>
      <v-flex text-xs-center md6 offset-md3 lg6 offset-lg3>
        <v-card class="elevation-20">
          <v-parallax src="/static/img/fondo_chico.png">
            <h1 class="white--text">BIENVENIDO..!!</h1>
            <br>
            <p class="white--text">Su email fue verificado correctamente y se completó el registro de manera satisfactoria.</p>
            <p class="white--text">Gracias por elegirnos.</p>
            <v-icon x-large dark>check</v-icon>
            <br>
            <br>
            <div class="text-xs-center">
              <v-btn href="http://localhost:8080/#/login" round outline dark>Iniciar sesion</v-btn>
            </div>
            <!-- <a href="http://localhost:8080/#/login" style="text-decoration: none">Iniciar session</a> -->
          </v-parallax>
        </v-card>
        <v-container>
          <br>
          <img src="/static/img/lartec_texto.png" width="100px" alt="">
          <br>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
