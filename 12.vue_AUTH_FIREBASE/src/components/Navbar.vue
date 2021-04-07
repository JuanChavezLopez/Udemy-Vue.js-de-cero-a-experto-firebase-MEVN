<template>
{{ usuarioAutenticado }}
  <div class="navbar navbar-dark bg-success">
      <router-link to="/" class="navbar-brand " style="padding-left:30%; font-size:40px;font-weight:700;">
        VUE - CRUD + LOCALSTORAGE + FIREBASE
      </router-link>
      <div class="d-flex">
          <router-link 
            class="btn btn-dark" 
            to="/"
            v-if="usuarioAutenticado"
          >
          Tareas
          </router-link>
          <router-link 
            class="btn btn-dark" 
            to="/ingreso"
            v-if="!usuarioAutenticado"
          >
          Ingresar
          </router-link>
          <router-link 
            class="btn btn-dark" 
            to="/registro"
            v-if="!usuarioAutenticado"
          >
          Registrar
          </router-link>
          <button class="btn btn-danger " v-if="usuarioAutenticado" @click="cerrarSesion">
            Cerrar Sesion
          </button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  },

  methods: {
    ...mapActions(['cerrarSesion'])
  }

}
</script>

<style>
    /* .navbar{
        color: white;
    } */
</style>