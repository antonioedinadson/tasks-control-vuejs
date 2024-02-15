import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './routes';
import { key, store } from './store/store';

import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
    .use(store, key)
    .use(router)
    .mount('#app')
