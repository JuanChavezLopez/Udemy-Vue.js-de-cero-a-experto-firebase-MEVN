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
    },
    user: null
  },
  // !DESABILITAMOS TODO LO REFERENTE A LOCALSTORAGE
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    cargar(state, payload){
      state.tareas = payload
    },
    setTarea(state, payload) {
      console.log('Vamos a agregar la tarea y imprimos todas las tareas....')
      console.log(state.tareas)
      state.tareas.push(payload)

      // subimos al localstorage
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
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
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      /* el filter, nos devuelve un nuevo array, sin el item comparado */
      state.tareas = state.tareas.filter(item => item.id !== payload)
      
      // eliminamos del  localstorage
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
  },
  actions: {
      async ingresoUsuario({commit}, usuario){
        try {
          const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfxSyDd4pSy98mIXE5w4P8CC5FsC8WK8c', {
            method: 'POST',
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true
            })
          })

          const userDB = await res.json()
          console.log('userDB',userDB)

          if(userDB.error) {
            return console.log(userDB.error)
          }
          commit('setUser', userDB);
        } catch (error) {
          console.log(error)
        }
      },
      async registrarUsuario({commit}, usuario) {
        try {
          const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfxSyDd4pSy98mIXE5w4P8CC5FsC8WK8c', {
            method: 'POST',
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true
            })
          })
          const userDB = await res.json()
          console.log(userDB)

          // !imprimimos si hay algun error
          if(userDB.error){
            console.log(userDB.error)
            return
          }
          commit('setUser', userDB);
          // ! EL ERROR DEL CATCH ES CUANDO HACEMOS UNA SOLICITUD INVALIDA
        } catch (error) { 
          console.log(error)
        }
      },
    // !----- FIREBASE CARGAR DATOS EN DOCUMENTO-----
      async cargarLocalStorage({ commit }) {
        try {
          const res = await fetch ('https://maktub-91e2c-default-rtdb.firebaseio.com/tareas.json');
          const dataDB = await res.json()
          console.log(dataDB)
          // ----------------------------

          const arrayTareas = []

          for(let id in dataDB){
            console.log(id);
            console.log(dataDB[id])
            arrayTareas.push(dataDB[id])
          }

          console.log(arrayTareas);
          commit('cargar', arrayTareas);

        } catch (error) {
          console.log(error);
        }
      },
      // !----------------   GUARDAR DATOS EN FIREBASE    -------------
      async setTarea({commit}, tarea) {
        try {
          const res = await fetch(`https://maktub-91e2c-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(tarea)
          })
          
          const dataDB = await res.json()
          console.log(dataDB);
          
        } catch (error) {
          console.log(error);
        }
        commit('setTarea', tarea)
      },
      getTareas({ commit }, id) {
        commit ('getTareas', id)
      },
      // !----------------   ACTUALIZAR DATOS EN FIREBASE    -------------
      async updateTarea({commit}, tarea) {
        try {
          const res = fetch(`https://maktub-91e2c-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(tarea)
          })
          const dataDB = await res.json();
          // console.log(dataDB)
          commit('update', dataDB)
          
        } catch (error) {
          console.log(error);
        }
      },
      // !----------------   ELIMINAR DATOS EN FIREBASE    -------------
      async deleteTareas({commit}, id){
        try {
            await fetch (`https://maktub-91e2c-default-rtdb.firebaseio.com/tareas/${id}.json`, {
              method: 'DELETE'
            })
            commit('eliminar', id)
            
         } catch (error) {
           console.log(error);
         }
      },
    },
  modules: {
  }
})
