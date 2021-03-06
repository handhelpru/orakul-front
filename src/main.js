import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import VueGtag from "vue-gtag";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .use(VueGtag, {
    config: { id: process.env.VUE_APP_GTAG },
  })
  .mount("#app");
