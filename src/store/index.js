import { createStore } from 'vuex'
import axios from 'axios'

const hostAddress = 'http://localhost:3000'

export default createStore({
  state: {
    contacts: [],
    contactName: ''
  },
  getters: {
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, payload) {
      state.contacts = payload
    },
    SET_CONTACT_NAME(state, payload) {
      state.contactName = payload
    },
    SET_NEW_CONTACT_TO_STORE(state, payload) {
      state.contacts.push(payload)
    }
  },
  actions: {
    GET_ALL_CONTACTS({commit}) {
      return axios.get(hostAddress + '/api/contacts')
          .then(contacts => commit('SET_CONTACTS_TO_STORE', contacts.data))
    },
    SEND_MESSAGE_TO_CHAT({commit}, {id, chats}) {
      console.log(commit)
      return axios.put(hostAddress + '/api/contacts/' + id, chats)
    },
    ADD_NEW_CONTACT({commit}, data) {
      return axios.post(hostAddress + '/api/contacts/', data)
          .then(commit('SET_NEW_CONTACT_TO_STORE'), data)
    },
    DELETE_CONTACT({commit}, id) {
      console.log(commit)
      return axios.delete(hostAddress + '/api/contacts/' + id)
    }
  },
  modules: {
  }
})
