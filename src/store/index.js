import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    githubUser: {
      login: 'PhEEP',
      avatar_url: 'https://avatars0.githubusercontent.com/u/49620'
    },
    gists: [],
    loading: false,
    error: null,
    searching: false
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
    },
    toggleSearch (state, payload) {
      state.searching = !state.searching
    },
    setGist (state, payload) {
      state.gist = payload
    }
  },
  actions: {
    getGists ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      console.log(payload)
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
    },
    toggleSearch ({ commit }) {
      commit('toggleSearch')
    },
    setGithubUser ({ commit }, payload) {
      axios.get(`https://api.github.com/users/${payload}`).then(response => {
        console.log(response)
        commit('setGithubUser', response.data)
      })
    },
    setGist ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      axios
                .get(`https://api.github.com/gists/${payload}`)
                .then(response => {
                  console.log(response)
                  commit('setGist', response.data)
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
                })
    },
    clearError ({ commit }) {
      commit('clearError')
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
    },
    searching (state) {
      return state.searching
    },
    gist (state) {
      return state.gist
    }
  }
})
