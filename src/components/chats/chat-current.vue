<template>
  <div class="current-chat flex flex-col h-full">
      <ul class="v-user-chat flex grow flex-col my-5 mx-2">
        <li class="chat-row my-1"
            :class="row.isOwn ? 'self-end' : 'self-start'"
            v-for="row in currentUser.chats"
            :key="row._id">
          <div :class="row.isOwn ? 'bg-blue-300 align' : 'bg-green-300'"
               class="rounded-lg px-2 py-1">
            <span>{{ row.text }}</span>
          </div>
          <span class="flex justify-end text-xs font-mono mx-1 text-gray-500">{{ row.time }}</span>
        </li>
      </ul>

    <div class="bg-indigo-900 text-indigo-100">
      <div class="flex items-center py-1">
        <input class="rounded-lg px-2 py-1 mx-2 w-full outline-none bg-indigo-700" type="text" v-model="message" @keypress.enter="sendMessage">
        <button class="mx-5 flex justify-center items-center" @click="sendMessage">
          <i class="material-icons">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "chat-current",
  data() {
    return {
      currentUser: {},
      message: ''
    }
  },
  async mounted() {
    if (this.contacts.length === 0) {
      await this.GET_ALL_CONTACTS()
    }
    if (localStorage.getItem('chat')) {
      this.currentUser = this.contacts.find(elem => elem._id == localStorage.getItem('chat'))
    }
  },
  computed: {
    ...mapState([
        'contacts'
    ])
  },
  methods: {
    ...mapActions([
        'GET_ALL_CONTACTS',
        'SEND_MESSAGE_TO_CHAT'
    ]),
    sendMessage() {
      const newMessage = {
        time: new Date().toLocaleTimeString('en-US',{
          hour12: false,
          hour: 'numeric',
          minute: 'numeric'
        }),
        text: this.message,
        isOwn: false,
      }

      this.currentUser.chats.push(newMessage)
      this.message = ''

      this.SEND_MESSAGE_TO_CHAT({id: this.currentUser._id, chats: this.currentUser})
    }
  }
}
</script>

<style scoped>

</style>
