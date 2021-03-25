<template>
  <div>
      <h1>{{ texto }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        texto: String
    }

}
</script>

<style scoped>
    h1 {
        color: peru;
    }
</style>