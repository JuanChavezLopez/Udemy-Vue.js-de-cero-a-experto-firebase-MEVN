<template>
  <div class="container">
    <form @submit.prevent="procesarFormulario">
      <Input :propsTarea="tarea" />
    </form>
    <hr>
    <!-- <p>{{tarea}}</p> -->

    <ListaTareas />
  </div>
</template>

<script>

import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas'
import { mapActions } from 'vuex'

const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias:[],
        estado: '',
        numero: 0
      }

    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario() {
      console.log(this.tarea)

      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacio')
        return
      }
      console.log('No esta vacio')

      // generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      // enviamos los datos, llamamos al action
      this.setTareas(this.tarea)

      // limpiar los datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  }

}
</script>
