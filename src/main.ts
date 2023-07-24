import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { AddCE } from './main.ce.ts'

AddCE()

createApp(App).mount('#app')
