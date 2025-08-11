import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/reset.css';
import DefaultLayout from "./layouts/default.vue";
import installPlugins from "./utils/plugins/index";
import "./assets/styles/index.scss";
const app = createApp(App)

// 禁用 Vue DevTools
app.config.devtools = false;

installPlugins(app);
app.component("LayoutDefault", DefaultLayout);

app.use(createPinia()).use(router).mount("#app");