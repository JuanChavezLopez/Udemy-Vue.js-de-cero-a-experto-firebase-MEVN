<template>
  <titulo texto="Ruta con parametros"></titulo>
  <h2>Parametro: {{ $route.params.id }}</h2>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    }
}
</script>


<style>

</style>