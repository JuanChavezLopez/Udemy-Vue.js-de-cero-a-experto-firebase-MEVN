<template>
<div>
    <h1 class="my-5">Ingrese Usuario</h1>
    <form @submit.prevent="procesarFormulario()">
        <input 
            type="email" 
            placeholder="email"
            class="form-control my-2"
            v-model.trim="email"
        >
        <input 
            type="password" 
            placeholder="password"
            class="form-control my-2"
            v-model.trim="pass1"
        >
        <button 
            type="submit" 
            class="btn btn-primary"
            :disabled ="bloquear"
        >Ingresar</button>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return  {
            email: 'juan@hotmail.com',
            pass1: '111111',
        }
    },
    computed: {
        bloquear() {
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5){
                return false
            }
            return true;
        }
    },
    methods: {
        // ! aca estamos llamando directamente a la accion registrar Usuario
        ...mapActions(['ingresoUsuario']),
        procesarFormulario() {
            this.ingresoUsuario({email: this.email, password: this.pass1})
            this.email = '';
            this.pass1 = '';
        }
    },

}
</script>

<style>

</style>