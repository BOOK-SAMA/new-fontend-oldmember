// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from "axios"
import { createPinia } from "pinia"

const pinia = createPinia()
const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.config.globalProperties.$axios = axios;
app.use(pinia)
app.use(router)
app.mount('#app')
