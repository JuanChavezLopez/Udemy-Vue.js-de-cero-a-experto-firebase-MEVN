<template>
  <div class="container">
      Editar {{ $route.params.id }} - {{tarea}}<!-- imprimimos el id que estamos enviando por la direccion web -->
        <form @submit.prevent="updateTarea(tarea)">
            <Input :propsTarea="tarea" />
        </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'

export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['getTareas', 'updateTarea'])
    },
    created() {
        // esto se genera de manera automatica cuando carga toda la pagina
        // estamos haciendo la solicitud de la tarea, en este momento le enviamos el id, si lo encuentra por reactividad se actualiza la tarea, la cual vamos a imprimir en el formulario
        this.getTareas(this.$route.params.id)
    }

}
</script>

<style>

</style>