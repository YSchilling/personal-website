import "./main.css";
import "highlight.js/styles/vs2015.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const app = createApp(App);
app.use(router);
app.mount("#app");

export default app;
