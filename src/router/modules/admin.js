const admin = [
  {
    path: "/admin",
    component: () => import("../../layouts/admin/admin.vue"),

    children: [
      {
        path: "staffs",
        name: "admin-staffs",
        component: () => import("../../pages/admin/staffs/index.vue"),
      },
      {
        path: "fruits",
        name: "admin-fruits",
        component: () => import("../../pages/admin/fruits/index.vue"),
      },
      {
        path: "bills",
        name: "admin-bills",
        component: () => import("../../pages/admin/bills/index.vue"),
      },
      {
        path: "profile",
        name: "admin-profile",
        component: () => import("../../pages/admin/profile/index.vue"),
      },
      {
        path: "createBill",
        name: "admin-createBills",
        component: () => import("../../pages/admin/createBills/index.vue"),
      },
    ],
  },
];
export default admin;
