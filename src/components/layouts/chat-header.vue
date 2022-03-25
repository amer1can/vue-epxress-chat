<template>
  <div class="chat-header py-3 px-5 bg-indigo-900 text-indigo-100 flex justify-between content-center">
      <div v-if="!isHome && !isChats" class="v-header__back flex content-center cursor-pointer"
           @click="goBack"
      >
        <i class="material-icons">arrow_back_ios_new</i>
        <span>Назад</span>
      </div>
      <div class="v-header__name">{{ returnHeader }}</div>
      <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
        <span class="text-4xl">L</span>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "chat-header",
  computed: {
    ...mapState([
       'contactName'
    ]),
    returnHeader() {
      if (this.$route.path === '/' ||
          this.$route.path === '/chats' ||
          this.$route.path === '/add')
        return ''
      return this.contactName
    },
    isHome() {
      return this.$route.path === '/'
    },
    isChats() {
      return this.$route.path === '/chats'
    }
  },
  methods: {
    goBack() {
      if (localStorage.getItem('chat')) {
        localStorage.removeItem('chat')
      }
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>

</style>
