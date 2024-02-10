// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from "axios"


const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')
