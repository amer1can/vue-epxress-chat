<template>
  <div class="add-contact px-12 py-4 flex flex-col">
    <input class="mt-2 px-2 py-1 rounded-lg outline-none" type="text" placeholder="Имя" v-model="name">
    <input class="mt-2 px-2 py-1 rounded-lg outline-none" type="text" placeholder="Телефон" v-model="phone">
    <button class="mt-2 bg-blue-300 self-center px-2 py-2 rounded-lg"
            @click="addContact"
            :disabled="isEmpty"
    >Добавить</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "add-contact",
  data() {
    return {
      name: '',
      phone: ''
    }
  },
  computed: {
    isEmpty() {
      return this.name.length === 0 || this.phone.length === 0
    }
  },
  mounted() {
    if (localStorage.getItem('chat')) {
      localStorage.removeItem('chat')
    }
  },
  methods: {
    ...mapActions([
       'ADD_NEW_CONTACT'
    ]),
    addContact() {
      const data = {
        name: this.name,
        phone: this.phone,
        status: 'offline',
        chats: []
      }
      this.ADD_NEW_CONTACT(data)
        .then(res => {
          if(res.data.state === 'success') {
            console.log('User ' + this.name + ' added successfully')
            this.name = ''
            this.phone = ''
          }
        })


    }
  }
}
</script>

<style scoped>

</style>
