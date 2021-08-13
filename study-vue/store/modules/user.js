import storage from 'storage'
import { login, getInfo } from '@/api'

const ACCESS_TOKEN = 'ACCESS_TOKEN'

const user = {
  state: {
    token: '',
    info: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    Login({ commit }, user) {
      return new Promise((resolve, reject) => {
        login(user)
          .then((res) => {
            let { access_token, message, success } = res.data
            if (success) {
              storage.set(ACCESS_TOKEN, access_token)
              commit('SET_TOKEN', access_token)
              resolve()
            } else {
              reject(new Error(message))
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            let { data, message, success } = res.data
            if (success) {
              commit('SET_INFO', data)
              resolve()
            } else {
              reject(new Error(message))
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    Logout({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_INFO', '')
        storage.remove(ACCESS_TOKEN)
        resolve()
      })
    }
  }
}
