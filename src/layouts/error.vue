<template>
  <v-app>
    <!-- <h1>PAGE NOT FOUND</h1> -->
    <!-- <h1>INICIO</h1> -->
    <!-- <div class="container">
      <router-view />
    </div> -->
    <v-content class="grey darken-4">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'error' // id of the layout
  }
</script>

<style>
/* your style */
</style>
