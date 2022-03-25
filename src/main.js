import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
import 'material-design-icons-iconfont'

// import VueSocketIO from 'vue-3-socket.io'
//
// const io = new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:3000', //options object is Optional
//     vuex: {
//         store,
//         actionPrefix: "SOCKET_",
//         mutationPrefix: "SOCKET_"
//     }
// })

createApp(App).use(store).use(router).mount('#app')
