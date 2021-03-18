import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/app.css')

createApp(App).use(router).mount('#root')
