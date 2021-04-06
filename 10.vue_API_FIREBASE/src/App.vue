<template>
  <div id="nav">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() { /* cuando nuestra aplicacion arranque cargamos, la informacion del localStorage, de manera automatica */
    this.cargarLocalStorage()
  }
}
</script>

<style>

</style>
