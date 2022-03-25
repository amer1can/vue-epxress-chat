<template>
  <div class="contacts-list mx-4 my-4">
    <contacts-user
        v-for="contact in contacts"
        :key="contact._id"
        :contactData="contact"
        @toContactInfo="showContactInfo(contact)"
    />
  </div>
</template>

<script>

import {mapState, mapActions, mapMutations} from 'vuex'
import ContactsUser from "@/components/contacts/contact-user";

export default {
  name: "contacts-list",
  components: {ContactsUser},
  mounted() {
    if (localStorage.getItem('chat')) {
      localStorage.removeItem('chat')
    }
    this.GET_ALL_CONTACTS()
  },
  computed: {
    ...mapState([
        'contacts'
    ])
  },
  methods: {
    ...mapActions([
        "GET_ALL_CONTACTS"
    ]),
    ...mapMutations([
        'SET_CONTACT_NAME'
    ]),
    showContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {id: contact._id}
      })
      this.SET_CONTACT_NAME(contact.name)
    }
  },

}
</script>

<style scoped>

</style>
