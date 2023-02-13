import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import "@/assets/scss/main.scss";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

router.isReady().then(() => {
  app.mount("#app");
});
