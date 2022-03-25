<template>
  <chat-wrapper />
</template>

<script>
import ChatWrapper from "@/components/chat-wrapper";


export default {
  components: {ChatWrapper},
  mounted() {
    // this.sockets.subscribe('connect', (data) => {
    //   console.log(data)
    // });
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0 auto;
  max-width: 500px;
  min-width: 320px;
}
</style>
