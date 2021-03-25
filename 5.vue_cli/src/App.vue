<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <titulo texto="Mi banco dinamico 3.0"/>
    <cuenta/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Titulo from './components/Titulo.vue'
import Cuenta from './components/Cuenta.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Titulo,
    Cuenta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
