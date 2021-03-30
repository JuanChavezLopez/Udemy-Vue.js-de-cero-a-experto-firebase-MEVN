<template>
  <div class="container">
    <form @submit.prevent="procesarFormulario">
      <Input :propsTarea="tarea" />
    </form>
    <hr>

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
    ...mapActions(['setTarea']),

    procesarFormulario() {
      // imprimimos los datos llenados del formulario
      console.log('Imprimimos los datos del formulario')
      console.log(this.tarea)

      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacio')
        return
      }
      console.log('No esta vacio')

      // generar id, con el paquete que hemos instalado: npm i shortid
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      // enviamos los datos y llamamos a la accion
      this.setTarea(this.tarea)

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
