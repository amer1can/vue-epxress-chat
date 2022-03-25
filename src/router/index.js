import { createRouter, createWebHashHistory } from 'vue-router'
import ContactList from '@/components/contacts/contact-list'
import ContactInfo from '@/components/contacts/contact-info'
import ChatList from '@/components/chats/chat-list'
import ChatCurrent from '@/components/chats/chat-current'
import AddContact from '@/components/add/add-contact'

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: ContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: ChatList
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatCurrent
  },
  {
    path: '/add',
    name: 'add',
    component: AddContact
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
