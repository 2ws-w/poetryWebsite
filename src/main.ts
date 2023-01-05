import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createPinia } from 'pinia'
import router from './router'
import i18n from './language/i18n'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(pinia)
app.use(i18n)
app.mount('#app')
