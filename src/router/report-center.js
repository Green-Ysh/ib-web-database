let router = [
  {
    path: "/reportCenter",
    redirect: "/reportCenter/data",
    component: () => import("@/views/report-form-center/index.vue"),
    meta: {
      title: "报表中心",
    },
    children: [
      {
        path: "data",
        name: "report-data",
        component: () => import("@/views/report-form-center/data/index.vue"),
        meta: { title: "数据报表" }
      },
      {
        path: "chart",
        name: "report-chart",
        component: () => import("@/views/report-form-center/chart/index.vue"),
        meta: { title: "图形报表" }
      },
      {
        path: "print",
        name: "report-print",
        component: () => import("@/views/report-form-center/print/index.vue"),
        meta: { title: "打印报表" }
      },
      
      // 报表导出
      {
        path: "share",
        name: "report-share",
        component: () => import("@/views/report-form-center/share/index.vue"),
        meta: { title: "分享记录" }
      },
      {
        path: "export",
        name: "report-export",
        component: () => import("@/views/report-form-center/export/index.vue"),
        meta: { title: "导出记录" }
      },
      {
        path: "schedule",
        name: "report-schedule",
        component: () => import("@/views/report-form-center/schedule/index.vue"),
        meta: { title: "定时导出" }
      },
      
      // 其他路由
      {
        path: "dataset",
        name: "report-dataset",
        component: () => import("@/views/report-form-center/dataset/index.vue"),
        meta: { title: "共享数据集" }
      },
      {
        path: "recycle",
        name: "report-recycle",
        component: () => import("@/views/report-form-center/recycle/index.vue"),
        meta: { title: "回收站" }
      }
    ],
  },
];

export default router;
