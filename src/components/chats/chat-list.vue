<template>
  <div class="chat-list mx-4 my-4">
    <chat-user
        v-for="chat in usersWithChat"
        :key="chat._id"
        :chatData="chat"
    />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ChatUser from "@/components/chats/chat-user";


export default {
  name: "chat-list",
  components: {ChatUser},
  computed: {
    ...mapState([
        'contacts'
    ]),
    usersWithChat() {
      return this.contacts.filter(elem => elem.chats.length > 0)
    }
  },
  async mounted() {
    if (localStorage.getItem('chat')) {
      localStorage.removeItem('chat')
    }
    if (this.contacts.length === 0) {
      await this.GET_ALL_CONTACTS()
    }
  },
  methods: {
    ...mapActions([
        'GET_ALL_CONTACTS'
    ])
  }
}
</script>

<style scoped>

</style>
