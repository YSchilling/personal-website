import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/main.css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const app = createApp(App);
app.mount('#app')