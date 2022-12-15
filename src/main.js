import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import xss from 'xss';

const app = createApp(App);

app.config.globalProperties.$xss = xss;
app.mount('#app');
