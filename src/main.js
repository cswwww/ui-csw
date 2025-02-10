import { createApp } from 'vue'
import App from './App.vue'
import components from './components/index.js'
import './style/main.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(components)
app.mount('#app')
