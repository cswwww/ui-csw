import { createApp } from 'vue'
import App from './App.vue'
import './style/main.css'
import './style/font/iconfont.css'
import './style/font/iconfont.js'
import components from './components/index.ts'

const app = createApp(App)
app.use(components)
app.mount('#app')
