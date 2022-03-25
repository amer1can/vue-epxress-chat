<template>
  <div class="chat-wrapper flex flex-col">
    <chat-header />
    <chat-body />
    <chat-footer />
  </div>
</template>

<script>
import ChatFooter from "@/components/layouts/chat-footer";
import ChatHeader from "@/components/layouts/chat-header";
import ChatBody from "@/components/layouts/chat-body";
export default {
  name: "chat-wrapper",
  components: {ChatBody, ChatHeader, ChatFooter}
}
</script>

<style scoped>
.chat-wrapper {
  height: 100%;
}
</style>
