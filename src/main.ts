import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { register } from './main.ce.ts'

if (import.meta.env.PROD) register()
createApp(App).mount('#app')
