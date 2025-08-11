let router = [
  {
    path: "/onlineDesign",
    redirect: "/onlineDesign/screen",
    component: () => import("@/views/online-design/index.vue"),
    meta: {
      title: "在线设计",
    },
    children: [
      {
        path: "screen",
        name: "design-screen",
        component: () => import("@/views/online-design/screen/index.vue"),
        meta: { title: "大屏设计" },
      },
      {
        path: "data",
        name: "design-data",
        component: () => import("@/views/online-design/data/index.vue"),
        meta: { title: "数据报表设计" },
      },
      {
        path: "chart",
        name: "design-chart",
        component: () => import("@/views/online-design/chart/index.vue"),
        meta: { title: "图形报表设计" },
      },
      {
        path: "print",
        name: "design-print",
        component: () => import("@/views/online-design/print/index.vue"),
        meta: { title: "打印报表设计" },
      },
      {
        path: "dashboard",
        name: "design-dashboard",
        component: () => import("@/views/online-design/dashboard/index.vue"),
        meta: { title: "仪表盘设计" },
      },
      {
        path: "portal",
        name: "design-portal",
        component: () => import("@/views/online-design/portal/index.vue"),
        meta: { title: "门户设计" },
      },
      {
        path: "form",
        name: "design-form",
        component: () => import("@/views/online-design/form/index.vue"),
        meta: { title: "表单设计" },
      },
    ],
  },
];

export default router;
