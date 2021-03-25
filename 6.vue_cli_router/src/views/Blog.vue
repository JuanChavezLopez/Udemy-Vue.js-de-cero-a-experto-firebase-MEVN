<template>
  <titulo texto="Titulo de mi Blog" />
  <button @click="consumirApi">Consumir API</button>

   <div v-for="item in arrayBlog" :key="item.id">
        {{ item.id }}- {{ item.title }}
   </div>
</template>

<script>
import Titulo from '../components/Titulo'

export default {
    components: {
        Titulo
    },
    data() {
        return {
            arrayBlog: []
        }
    },
    methods: {
        async consumirApi() {
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                this.arrayBlog = array;

                console.log(array)
            } catch (error) {
                console.log(error)
            }
        }
    },
    // created() { /* primero carga todo lo que hay en el script y luego ejecuta el template, lo ejecuta de manera automatica */
    //     this.consumirApi()
    // },
}
</script>

<style>

</style>