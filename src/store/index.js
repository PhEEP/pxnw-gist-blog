import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    githubUser: 'PhEEP',
    avatar: 'https://avatars0.githubusercontent.com/u/9273255',
    gists: [],
    loading: false,
    error: null
  },
  mutations: {
    setGithubUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setGists (state, payload) {
      state.gists = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    getGists ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      axios
                .get(`https://api.github.com/users/${payload}/gists`)
                .then(response => {
                  commit('setGists', response.data)
                  commit('setLoading', false)
                  console.log(response)
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
                  console.log(error)
                })
    }
  },
  getters: {
    githubUser (state) {
      return state.githubUser
    },
    gists (state) {
      return state.gists
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
})
