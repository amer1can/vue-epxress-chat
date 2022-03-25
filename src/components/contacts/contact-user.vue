<template>
  <div class="contacts-user flex justify-between py-2 px-5 items-center
              border-solid border-2 rounded-xl border-purple-900 px-2 py-1 mt-1 cursor-pointer"
       @click="toContactInfo"
  >
    <div class="w-12 h-12 rounded-full bg-orange-600"></div>
    <div class="user-name">
      <span class="cursor-pointer">{{ contactData.name }}</span>
    </div>
    <div class="user-status">
      <span class="w-2 h-2 block rounded-full" :class="onlineStatus"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacts-user",
  props: {
    contactData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    onlineStatus() {
      return {
        'bg-green-700': this.contactData.status === 'online',
        'bg-rose-500': this.contactData.status === 'offline',
      }
    }
  },
  methods: {
    toContactInfo() {
      this.$emit('toContactInfo')
    }
  }
}
</script>

<style scoped>

</style>
