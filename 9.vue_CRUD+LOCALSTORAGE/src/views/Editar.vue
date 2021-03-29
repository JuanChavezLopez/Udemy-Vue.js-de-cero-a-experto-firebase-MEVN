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
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created() {
        this.setTarea(this.$route.params.id)
    }

}
</script>

<style>

</style>