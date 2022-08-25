import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./routers/router.js";

const app = createApp(App);
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
