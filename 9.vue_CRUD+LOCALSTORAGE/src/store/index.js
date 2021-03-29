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
    set(state, payload) {
      state.tareas.push(payload)
      console.log(state.tareas)
    },
    eliminar(state, payload){
      /* el filter, nos devuelve un nuevo array, sin el item comparado */
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload) {
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      /* cuando encuentre  el payload lo va a almacenar en la variable state.tarea, devuelve un objeto */
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      // devolvemos un array con nuestra tarea modificada
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/') /* empujamos a la pagina raiz */
    }
  },
  actions: {
      setTareas({commit}, tarea) {
        commit('set', tarea)
      },
      deleteTareas({commit}, id){
        commit('eliminar', id)
      },
      setTarea({ commit }, id) {
        commit ('tarea', id)
      },
      updateTarea({commit}, tarea) {
        commit('update', tarea)
      }
  },
  modules: {
  }
})
