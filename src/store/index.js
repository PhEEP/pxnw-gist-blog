import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    githubUser: {},
    gists: [],
    gist: null,
    loading: false,
    error: null,
    searching: false,
    recentUsers: {}
  },
  mutations: {
    setGithubUser (state, payload) {
      state.githubUser = { ...payload }
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
    },
    setRecentUsers (state, payload) {
      state.recentUsers = payload
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
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
                })
    },
    toggleSearch ({ commit }) {
      commit('toggleSearch')
    },
    setGithubUser ({ commit }, payload) {
      commit('clearError')
      commit('setLoading', true)
      axios
                .get(`https://api.github.com/users/${payload}`)
                .then(response => {
                  firebase
                        .database()
                        .ref('users/' + payload)
                        .set({
                          ...response.data,
                          created_at: moment().format()
                        })
                  commit('setGithubUser', response.data)
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
                })
    },
    setGist ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      axios
                .get(`https://api.github.com/gists/${payload}`)
                .then(response => {
                  commit('setGist', response.data)
                  commit('setLoading', false)
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
                })
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    getRecentUsers ({ commit }) {
      commit('setLoading', true)
      commit('clearError')
      firebase
                .database()
                .ref('users')
                .on('value', snapshot => {
                  commit('setLoading', false)
                  commit('setRecentUsers', snapshot.val())
                })
                .catch(error => {
                  commit('setError', error)
                  commit('setLoading', false)
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
    },
    searching (state) {
      return state.searching
    },
    gist (state) {
      return state.gist
    },
    recentUsers (state) {
      return state.recentUsers
    }
  }
})
