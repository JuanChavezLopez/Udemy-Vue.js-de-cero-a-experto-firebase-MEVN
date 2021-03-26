<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="colorContador"
    >{{ titulo }}: {{contador}}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />
    <!-- <button @click="accionDisminuir">Disminuir</button> -->
    <hr>
    <BotonAccion :estado="true"/>
    <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import BotonAccion from'../components/BotonAccion'

import {mapState,  mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: ' Juan estamos avanzando mucho...!!!Bravo!!!'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? {'color':'green'} : {'color':'red'}]
    }
  },
  methods: {
    // ...mapMutations(['incrementar', 'disminuir']),
    ...mapActions(['accionIncrementar', 'accionDisminuir'])
  },
}
</script>
