import { createApp } from 'vue'
import './style.css'
// 导入pinia
import { createPinia } from "pinia";
const pinia = createPinia();
import App from './App.vue'

createApp(App).use(pinia).mount('#app')
