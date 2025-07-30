import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/reset.css';
import DefaultLayout from "./layouts/default.vue";
import installPlugins from "./utils/plugins/index";

const app = createApp(App)
installPlugins(app);
app.component("LayoutDefault", DefaultLayout);

app.use(createPinia()).use(router).mount("#app");