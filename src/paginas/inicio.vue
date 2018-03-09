<template>
  <v-content class="grey lighten-5">

    <!-- // CABECERA, CAMBIAR PARALLAX POR UN VIDEO, VER COMO QUEDA -->

    <section>
      <v-parallax src="https://i.imgur.com/shHOJRx.jpg" height="500">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <img src="../assets/logo.png" alt="Vuetify.js" height="200">
          <h1 class="white--text mb-2 display-3 text-xs-center" style="font-weight: bold; font-family: 'Arial', Times, serif;"><span class="red--text text--darken-3">LAR</span><span class="grey--text text--darken-3">TEC</span></h1>
          <!-- <div class="display-1 mb-3 text-xs-center">Soluciones IOT y TRACKING</div> -->
          <!-- <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn> -->
        </v-layout>
      </v-parallax>
    </section>

    <!-- // SECCION DE PRINCIPALES SERVICIOS -->

    <section>
        <v-layout
          column
          wrap
          class="my-5 grey lighten-5 grey--text text--darken-3"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2 ">Servicios Principales</h2>
              <!-- <span class="headline">
                Cras facilisis mi vitae nunc
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">track_changes</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Rastreo Vehicular</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la actualidad son de vital importancia para lograr competitividad en los nuevos mercados debido a los grandes beneficios que trae aparejado la incorporacion de esta tecnología.
                      LARTEC desarrolla y despliega esta tecnología utilizando metodos y procesos de actualidad. De manera tal que disponemos de nuestros <b>propios</b> rastreadores y sistemas de gestión. Es por este motivo que nos diferenciamos en la industria.
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">developer_board</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Conectividad IOT</div>
                    </v-card-title>
                    <v-card-text>
                      Es el área que esta en auge en la industria moderna. Consiste simplemente en brindar <b>conectividad</b> a diversos dispositivos o procesos con el proposito de aumentar la seguridad, el control, la productividad y la confiabilidad de los sistemas.
                      Nuestro personal esta capacitado para lograr la integración de estas tecnologías en su empresa y de esta manera incrementar el rendimiento en diferentes aspectos.
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">code</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Desarrollo</div>
                    </v-card-title>
                    <v-card-text>
                      Como servicio ofrecemos poner a disposición nuestro equipo de profesionales capacitados en las distintas áreas relacionadas al desarrollo tecnológico a los clientes más exigentes que requieren realizar hardware y software a medida.
                      No dude en contactarnos y presentarnos sus necesidades a resolver.
                      <br>
                      <br>
                      <router-link to="tracking" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <!-- // SECCION SERVICIOS TRACKING  -->

      <section>
        <v-parallax src="http://cygnussofttech.com/images/mobile-tracking/tracking.jpg" height="400">
          <v-layout column align-center justify-center>
            <div class="display-3 white--text mb-3 text-xs-center red--text text--darken-3" style="font-weight: bold; font-family: 'Arial', Times, serif;">Rastreo Vehicular</div>
            <div class="headline grey--text text--darken-3" style="font-weight: bold; font-family: 'Arial', Times, serif;">Sistemas de rastreo a medida</div>
            <!-- <v-btn
              class="red lighten-1 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Comenzar
            </v-btn> -->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5 grey lighten-5 grey--text text--darken-3"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2">Servicios de Rastreo</h2>
              <!-- <span class="headline">
                Cras facilisis mi vitae nunc
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media>
                      <img src="../assets/cards/basico.jpg" height="120">
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Basico</div>
                    </v-card-title>
                    <v-card-text>
                      Como servicio ofrecemos poner a disposición
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media>
                      <img src="../assets/cards/rentalcar.jpg" height="120">
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">RentalCar</div>
                    </v-card-title>
                    <v-card-text>
                      Version destinada a las empresas o particulares que rentan vehiculos. Permite visualizar la flota de vehiculos en tiempo real y generar informes con datos y graficas relevantes al uso de cada unidad.
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media>
                      <img src="../assets/cards/remis.jpg" height="120">
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Remis</div>
                    </v-card-title>
                    <v-card-text>
                      Esta pensado para tener control de la flota de <b>Remises</b> desde la base. Admite la resepcion de pedidos desde una plataforma WEB
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0">
                    <v-card-media>
                      <img src="../assets/cards/transporte.jpg" height="120">
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Transporte</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la act
                      <br>
                      <br>
                      <router-link to="iot" class="subheading blue-grey--text">Ver Más.</router-link>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <!-- // SECCION SERVICIOS DE IOT, VER COMO ARMAR ESTA PARTE... SER CUIDADOSO EN LA MANERA QUE SE OFRESE EL SERVICIO  -->

      <section>
        <v-parallax src="https://connecteddeviceslab.org/wp-content/uploads/2016/08/MLseries-1.png" height="400">
          <v-layout column align-center justify-center>
            <div class="display-3 white--text mb-3 text-xs-center red--text text--darken-3" style="font-weight: bold; font-family: 'Arial', Times, serif;">Conectividad IOT</div>
            <div class="headline" style="font-weight: bold; font-family: 'Arial', Times, serif;">Sistemas de rastreo a medida</div>
            <v-btn
              class="red lighten-1 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Comenzar
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5 grey lighten-5 grey--text text--darken-3"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2">Servicios de Rastreo</h2>
              <!-- <span class="headline">
                Cras facilisis mi vitae nunc
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">wb_incandescent</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Planeamiento</div>
                    </v-card-title>
                    <v-card-text>
                      Todo proyecto comienza con el <b>planeamiento</b>. Es en este punto donde nuestros especialistas analizan y estudian las necesidades a cubrir o problemas que se desean resolver. Primero el cliente presenta, de manera general, las especificaciones del proyecto y luego se genera una comunicacion bidireccional con el equipo de profesionales hasta definir las especificaciones finales.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">developer_board</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Diseño</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la actualidad son de vital importancia para lograr competitividad en los nuevos mercados debido a los grandes beneficios que trae aparejado la incorporacion de esta tecnología.
                      LARTEC desarrolla y despliega esta tecnología utilizando metodos y procesos de actualidad. De manera tal que disponemos de nuestros <b>propios</b> rastreadores y sistemas de gestión. Es por este motivo que nos diferenciamos en la industria.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">business</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Despliegue</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la act
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">cached</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Gestion</div>
                    </v-card-title>
                    <v-card-text>
                      Como servicio ofrecemos poner a disposición
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <!-- // SECCION EQUIPOS DESARROLLADOS POR LA EMPRESA  -->

      <section>
          <v-layout
            column
            wrap
            class="my-5 grey lighten-5 grey--text text--darken-3"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="display-2 ">Equipos Desarrollados</h2>
                <!-- <span class="headline">
                  Cras facilisis mi vitae nunc
                </span> -->
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap>
                  <v-flex xs12 md4 align-center text-xs-center>
                    <v-card class="elevation-1">
                      <br>
                      <img src="../assets/essa_1.png" alt="ESSA 1" height="250">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">ESSA 1</div>
                        <v-icon large class="green--text text--lighten-1 check">check_circle</v-icon>
                      </v-card-title>
                      <v-card-text>
                        El <b>ESSA 1</b> es un dispositivo electrónico con grandes prestaciones. Esta diseñado especificamente para cubrir con un amplio numero de tareas, entre ellas, rastreo vehicular y transmisión de datos de baja latencia.
                        <br>
                        <br>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Localización (gps) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conexión 2G (gprs, edge)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">UART (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">RS485 (0)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">CANBUS (0)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conector para camara (0)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas digitales (5) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas digitales (3) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas analógicas (1) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas analógicas (0) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <br>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4 align-center text-xs-center>
                    <v-card class="elevation-1">
                      <br>
                      <img src="../assets/essa_x.png" alt="ESSA 2" height="250">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">ESSA 2</div>
                        <div class="subheading grey--text check">Próximamente</div>
                      </v-card-title>
                      <v-card-text>
                        Esta version <b>(ESSA 2)</b> pretende cubrir segmentos que requieren dispositivos mas avanzados, nesesarios para sistemas de seguridad y control mas complejos. Por este motivo incorpora una serie de conectores adicionales.
                        <br>
                        <br>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Localización (gps, glonass) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conexión 3G (HSPA)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">UART (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">RS485 (0)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">CANBUS (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conector para camara (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas digitales (8) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas digitales (4) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas analógicas (4) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas analógicas (0) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="red--text text--darken-3 check">remove_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <br>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4 align-center text-xs-center>
                    <v-card class="elevation-1">
                      <br>
                      <img src="../assets/essa_x.png" alt="ESSA 3" height="250">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">ESSA 3</div>
                        <div class="subheading grey--text check">Próximamente</div>
                      </v-card-title>
                      <v-card-text>
                        El más avanzado de la serie <b>ESSA</b> propone una solucion a los requerimientos definidos por las necesidades de la proxima decada. Donde se solicitan sistemas con mayor conectividad e inteligencia.
                        <br>
                        <br>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Localización (gps, glonass) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conexión 4G (LTE)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">UART (2)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">RS485 (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">CANBUS (1)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Conector para camara (2)</span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas digitales (8) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas digitales (8) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Entradas analógicas (4) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <v-layout>
                          <v-flex xs8 align-center text-xs-right>
                            <span class="subheading">Salidas analógicas (4) </span>
                          </v-flex>
                          <v-flex xs4 align-center text-xs-center>
                            <v-icon class="green--text text--lighten-1 check">check_circle</v-icon>
                          </v-flex>
                        </v-layout>
                        <br>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

      <!-- // SECCION DE SERVICIOS DE DESARROLLO  -->

      <section>
        <v-parallax src="http://www.clivemaxfield.com/area51/do-not-delete/max-0404-01-lg.jpg" height="400">
          <v-layout column align-center justify-center>
            <div class="display-3 white--text mb-3 text-xs-center" style="font-weight: bold; font-family: 'Arial', Times, serif;">DESARROLLO A LA MEDIDA</div>
            <div class="headline" style="font-weight: bold; font-family: 'Arial', Times, serif;">Empieza con tu proyecto hoy</div>
            <v-btn
              class="red lighten-1 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Comenzar
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5 grey lighten-5 grey--text text--darken-3"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2">Proceso de Desarrollo</h2>
              <!-- <span class="headline">
                Cras facilisis mi vitae nunc
              </span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">wb_incandescent</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Planeamiento</div>
                    </v-card-title>
                    <v-card-text>
                      Todo proyecto comienza con el <b>planeamiento</b>. Es en este punto donde nuestros especialistas analizan y estudian las necesidades a cubrir o problemas que se desean resolver. Primero el cliente presenta, de manera general, las especificaciones del proyecto y luego se genera una comunicacion bidireccional con el equipo de profesionales hasta definir las especificaciones finales.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">developer_board</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Diseño</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la actualidad son de vital importancia para lograr competitividad en los nuevos mercados debido a los grandes beneficios que trae aparejado la incorporacion de esta tecnología.
                      LARTEC desarrolla y despliega esta tecnología utilizando metodos y procesos de actualidad. De manera tal que disponemos de nuestros <b>propios</b> rastreadores y sistemas de gestión. Es por este motivo que nos diferenciamos en la industria.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">business</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Despliegue</div>
                    </v-card-title>
                    <v-card-text>
                      Los dispositivos y sistemas de rastreo en la act
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="grey--text text--lighten-1">cached</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline red--text text--darken-3">Gestion</div>
                    </v-card-title>
                    <v-card-text>
                      Como servicio ofrecemos poner a disposición
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <!-- // SECCION CONTACTOS  -->

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Información de Nosotros</div>
                </v-card-title>
                <v-card-text>
                  La Empresa nace de la <b>PASIÓN</b> por el desarrollo e innovación tecnológica. Nuestro principal objetivo es brindar soluciones de avanzada a posibles problemas que se presenten en el ámbito industrial y civil, mediante la aplicación de las ciencias Informáticas y Electrónicas.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contactanos</div>
                </v-card-title>
                <v-card-text>
                  Si deceas ponerte en contacto con nosotros y saber mas sobre nuestros productos y servicios, hazlo por alguno de los siguientes medios.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="red--text text--darken-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+54 380 4300102</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="red--text text--darken-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>El Chacho, 56, La Rioja, Argentina</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="red--text text--darken-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>diegocoll44@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
  </v-content>
</template>

<style>
.check{
    margin-left: 10px;
}
</style>
