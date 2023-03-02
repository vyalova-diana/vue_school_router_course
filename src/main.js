import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import TheAppLink from "@/components/TheAppLink.vue";

const app = createApp(App)

app.component('TheAppLink',TheAppLink)
app.use(router)

app.mount('#app')
