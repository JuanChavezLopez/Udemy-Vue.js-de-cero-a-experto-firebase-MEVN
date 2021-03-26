import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 120
  },
  mutations: { /* si vamos a modificar algo tiene que ser a travez de las mutations */
    incrementar(state,payload) {
      state.contador = state.contador + payload
    },
    disminuir(state, numero) {
      state.contador = state.contador - numero
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar',10)
    },
    accionDisminuir({commit}, numero) {
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
