<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
</template>

<script>

import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
  
}
</script>

<style>

</style>
