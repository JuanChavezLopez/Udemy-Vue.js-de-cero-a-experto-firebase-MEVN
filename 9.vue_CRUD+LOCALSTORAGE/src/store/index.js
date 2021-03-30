import { createStore } from 'vuex'
import router from '../router' /*  para redireccionar */

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    setTarea(state, payload) {
      console.log('Vamos a agregar la tarea y imprimos todas las tareas....')
      console.log(state.tareas)
      state.tareas.push(payload)

      // subimos al localstorage
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    getTareas(state, payload) {
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/') /* cuando no encuentra el id, lo redirecciona */
        return
      }
      /* cuando encuentre  el payload lo va a almacenar en la variable state.tarea, devuelve un objeto */
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      // devolvemos un array con nuestra tarea modificada
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/') /* empujamos a la pagina raiz, pero antes importamos el router*/
      // actualizamos el localstorage
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      /* el filter, nos devuelve un nuevo array, sin el item comparado */
      state.tareas = state.tareas.filter(item => item.id !== payload)
      
      // eliminamos del  localstorage
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
  },
  actions: {
      cargarLocalStorage({ commit }) {
        /* verificamos si existe informacion */
        if(localStorage.getItem('tareas')){
          const tareas = JSON.parse(localStorage.getItem('tareas'))
          commit('cargar', tareas)
          return 
        }
        /* en caso de que no exista creamos un array vacio */
        localStorage.setItem('tareas', JSON.stringify([]))
      },
      setTarea({commit}, tarea) {
        commit('setTarea', tarea)
      },
      getTareas({ commit }, id) {
        commit ('getTareas', id)
      },
      updateTarea({commit}, tarea) {
        commit('update', tarea)
      },
      deleteTareas({commit}, id){
        commit('eliminar', id)
      },
    },
  modules: {
  }
})
