const staff = [
  {
    path: "/staff",
    component: () => import("../../layouts/staff/index.vue"),

    children: [
      {
        path: "staffs",
        name: "staff-staffs",
        component: () => import("../../pages/admin/staffs/index.vue"),
      },
    ],
  },
];
export default staff;
