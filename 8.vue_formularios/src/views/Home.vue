<template>
  <div class="container">
    <form @submit.prevent="procesarFormulario">
      <input type="text" class="form-control my-2" placeholder="Ingrese Nombre" v-model.trim="tarea.nombre">

      <div class="form-check form-check-inline">
        <input type="checkbox" id="check-1" class="form-check-input" v-model="tarea.categorias" value="Javascript">
        <label for="check-1 form-check-label">Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="checkbox" id="check-2" class="form-check-input" v-model="tarea.categorias" value="Node.js">
        <label for="check-2 form-check-label">Node js</label>
      </div>
      <hr>

      <div class="mt-2">
        <div class="form-check form-check-inline">
          <input class="form-check-input" id="radio-1" type="radio" value="urgente" v-model="tarea.estado">
          <label class="form-check-label" for="radio-1">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" id="radio-2" type="radio" value="relax" v-model="tarea.estado">
          <label class="form-check-label" for="radio-2">Relay</label>
        </div>
      </div>
      <hr>

      <div class="mt-2">
        <input type="number" class="form-control" v-model.number="tarea.numero">
      </div>

      <button :disabled="bloquear" class="btn btn-dark mt-2 btn-block"  type="submit">
        Procesar
      </button>
    </form>
    <hr>
    <p>{{tarea}}</p>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias:[],
        estado: '',
        numero: 0
      }

    }
  },
  methods: {
    procesarFormulario() {
      console.log(this.tarea)

      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacio')
        return
      }
      console.log('No esta vacio')
      // enviamos los datos
      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false
    }
  },
}
</script>
