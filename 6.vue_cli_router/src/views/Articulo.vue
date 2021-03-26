<template>
<div>
  <titulo texto="Ruta con parametros"></titulo>
  <h2>Parametro: {{ $route.params.id }}</h2>

  <h3>{{articulo.title}}</h3>
  <p>Articulo {{ articulo.id }} - {{ articulo.body}}</p>
</div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    },
    data() {
      return {
        articulo: {} /* objeto vacio */
      }
    },
    methods: {
      async consumirArticulo() {
        try {
          const data = await fetch (`http://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          const objeto = await data.json()
          this.articulo = objeto  /* this.articulo va a ser igual al objeto que viene de nuestra API */
          console.log(objeto)

        } catch(error) {
          console.log(error)
        }
      }
    },
    created() {
      this.consumirArticulo()
    },
}
</script>


<style>

</style>