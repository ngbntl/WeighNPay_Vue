const admin = [
  {
    path: "/admin",
    component: () => import("../layouts/admin/admin.vue"),
    children: [
      {
        path: "staffs",
        name: "admin-staffs",
        component: () => import("../pages/admin/staffs/index.vue"),
      },
      {
        path: "fruits",
        name: "admin-fruits",
        component: () => import("../pages/admin/fruits/index.vue"),
      },
      {
        path: "bills",
        name: "admin-bills",
        component: () => import("../pages/admin/bills/index.vue"),
      },
    ],
  },
];
export default admin;
