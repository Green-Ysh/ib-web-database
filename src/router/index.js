import { createRouter, createWebHistory } from "vue-router";
import reportCenter from "./report-center";
import onlineDesign from "./online-design";
const routes = [
  {
    path: "/",
    redirect: "/reportCenter/",
  },
  {
    path: "/home",
    name: "首页",
    component: () => import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/designScreen",
    name: "大屏设计",
    component: () => import(/* webpackChunkName: "screen" */ "../views/design/screen/index.vue"),
  },
  ...reportCenter,
  ...onlineDesign,
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title || "BI-数据中台";
  document.title = title;
  next();
});

export default router;
