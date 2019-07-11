import axios from 'axios'

export default {
  state: {
    user: {
      id: null,
      name: null,
      bet: null,
      email: null
    }    
  },
  mutations: {
    setUser (state, payload) {
      state.user = {
        id: payload._id,
        name: payload.name,
        bet: payload.bet,
        email: payload.email 
      }      
    }
  },
  actions: {
    async createUser ({commit}, payload) {
      try{
        const response = await axios.post('http://localhost:3000/registration', payload);
        commit('setUser', response.data);
      }catch(err){
        alert(err);
      }      
    },
    async loginUser ({commit}, payload) {
      try {
        const response = await axios.post('http://localhost:3000/login', payload);
        commit('setUser', response.data);
      } catch (error) {
        alert(err);
      }
    },
    async updatePlayer ({commit}, payload){
      try {
        const response = await axios.put('http://localhost:3000/playUser', payload);
        commit('setUser', response.data);
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