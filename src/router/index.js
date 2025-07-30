import { createRouter, createWebHistory } from 'vue-router'

const routes = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title || "IB-数据中台";
  document.title = title;
  next();
});

export default router
