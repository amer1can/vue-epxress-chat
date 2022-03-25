<template>
  <div class="contacts-info">
    <div class="bg-yellow-500 w-40 h-40 mx-auto my-5 rounded-full flex items-center justify-center">
      <span class="text-7xl font-bold">{{ this.logo }}</span>
    </div>

    <div class="user-info-name">
      <span>{{ curContact.name }}</span>
    </div>
    <div class="user-info-phone">
      <span>{{ curContact.phone }} </span>
    </div>

    <div class="user-info-status">
      <span>{{ curContact.status }}</span>
    </div>

    <div class="user-btns my-5">
      <button class="bg-sky-500 rounded px-3 py-2 mx-3">Позвонить</button>
      <button class="bg-purple-500 rounded px-3 py-2 mx-3"
              @click="startChatTo(curContact._id)">Перейти в чат</button>
      <button class="bg-black rounded px-3 py-2 mx-3 text-white"
              @click="deleteContact(curContact._id)"
      >Удалить</button>

    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: "contacts-id",
  data() {
    return {
      curContact: {},
      logo: ''
    }
  },
  async mounted() {
    if (this.contacts.length === 0) {
      await this.GET_ALL_CONTACTS()
    }
    this.curContact = this.contacts.find(elem => elem._id == this.$route.query.id)
    this.logo = this.curContact.name[0]
  },
  computed: {
    ...mapState([
      'contacts'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_ALL_CONTACTS',
       'DELETE_CONTACT'
    ]),
    startChatTo(id) {
      localStorage.setItem('chat', id)
      this.$router.push({
        name: 'chat',
        params: {id}
      })
    },
    deleteContact(id) {
      this.DELETE_CONTACT(id)
        .then(res => {
          if(res.data.state === 'deleted') {
            this.$router.push('/')
          }
        })

    }
  },
}
</script>

<style scoped>

</style>
