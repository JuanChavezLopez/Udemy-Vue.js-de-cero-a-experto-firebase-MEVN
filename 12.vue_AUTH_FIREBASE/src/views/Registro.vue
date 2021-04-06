<template>
<div>
    <h1 class="my-5">Registro de Usuarios</h1>
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
        <input 
            type="password" 
            placeholder="password"
            class="form-control my-2"
            v-model.trim="pass2"
        >

        <button 
            type="submit" 
            class="btn btn-primary"
            :disabled ="bloquear"
        >Registrar</button>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return  {
            email: 'juan@gmail.com',
            pass1: '111111',
            pass2: '111111'
        }
    },
    computed: {
        bloquear() {
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
            return true;
        }
    },
    methods: {
        // ! aca estamos llamando directamente a la accion registrar Usuario
        ...mapActions(['registrarUsuario']),
        procesarFormulario() {
            this.registrarUsuario({email: this.email, password: this.pass1})
            this.email = '',
            this.pass1 = '',
            this.pass2 = ''
        }
    },

}
</script>

<style>

</style>