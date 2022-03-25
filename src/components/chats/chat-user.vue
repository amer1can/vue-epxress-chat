<template>
  <div class="chat-user flex items-center justify-between
              border-solid border-2 rounded-xl border-purple-900 px-2 py-1 mt-1 cursor-pointer"
       @click="goToChat(chatData._id)"
  >
    <div class="info flex">
      <div class="chat-ava w-14 h-14 rounded bg-red-200"></div>

      <div class="chat-name py-2 mx-5">
        <span class="block font-bold">{{ chatData.name }}</span>
        <span class="text-xs italic">{{ chatData.chats[chatData.chats.length - 1].text }}</span>
      </div>
    </div>
    <div class="chat-arr">
      <span class="text-xs italic">{{ chatData.chats[chatData.chats.length - 1].time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-user",
  props: {
    chatData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToChat(id) {
      this.$router.push({
        name: 'chat',
        params: {id: id}
      })
    }
  }
}
</script>

<style scoped>

</style>
