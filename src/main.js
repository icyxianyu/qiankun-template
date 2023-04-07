import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {registerMicroApps, start} from "qiankun"
import micro from "./micro"
createApp(App).use(ElementPlus).use(router).mount('#app')

registerMicroApps(micro)
start();