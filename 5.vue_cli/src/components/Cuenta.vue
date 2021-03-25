<template>
  <div>
      <h2>Tipo de Cuenta, {{cuenta}}</h2>
      <h2>Saldo:{{saldo}}</h2>
      <h2>Estado de Cuenta: {{ estado ? 'Activa' : 'Desactivada'}}</h2>
      <div v-for="(servicio, index) in servicios" :key="index">
         {{ index + 1}} -  {{ servicio }}
      </div>
      <AccionSaldo texto="Aumentar Saldo" @accion="agregarSaldo"/>
      <AccionSaldo texto="Disminuir Saldo" @accion="disminuirSaldo" :desactivar="desactivar" />
  </div>
</template>

<script>

import AccionSaldo  from './AccionSaldo'

export default {
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta:'Visa',
            estado: true,
            servicios: ['Giro', 'Abono' , 'Transferencia'],
            desactivar: false

        }
    },
    methods: {
        agregarSaldo() {
            this.saldo = this.saldo + 100
            this.desactivar = false
        },
        disminuirSaldo() {
            if(this.saldo === 0) {
                this.desactivar = true
                alert('EL SALDO ES IGUAL A CERO.')
            }else {
                this.saldo = this.saldo - 100
            }
        }
    },
}
</script>

<style scoped>
    h1 {
        color: green;
    }
</style>