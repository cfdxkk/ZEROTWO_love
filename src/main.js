import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(infiniteScroll)
app.mount('#app')

