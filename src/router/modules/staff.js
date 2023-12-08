const staff = [
  {
    path: "/staff",
    component: () => import("../../layouts/staff/index.vue"),

    children: [
      {
        path: "fruits",
        name: "staff-fruits",
        component: () => import("../../pages/staff/fruits/index.vue"),
      },
      {
        path: "bills",
        name: "staff-bills",
        component: () => import("../../pages/staff/bills/index.vue"),
      },
      {
        path: "createBills",
        name: "staff-createBills",
        component: () => import("../../pages/staff/createBills/index.vue"),
      },
      {
        path: "profile",
        name: "staff-profile",
        component: () => import("../../pages/staff/profile/index.vue"),
      },
    ],
  },
];
export default staff;
