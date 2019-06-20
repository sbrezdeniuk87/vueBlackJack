import axios from 'axios'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async createUser ({commit}, payload) {
      try{
        const response = await axios.post('http://localhost:3000/registration', payload)
        commit('setUser', response.data._id)
      }catch(err){
        alert(err);
      }      
    },
    async loginUser ({commit}, payload) {
      try {
        const response = await axios.post('http://localhost:3000/login', payload)
        commit('setUser', response.data)
      } catch (error) {
        alert(err);
      }
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
  }
}