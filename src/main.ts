// src/main.ts
import { createApp } from 'vue'; // Cambia '#vue' por 'vue'
import './styles/input.css';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');