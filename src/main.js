import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import IconsStyles from './assets/style/icons.css';
import AppStyles from './assets/style/app.css';

Framework7.use(Framework7Vue);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
