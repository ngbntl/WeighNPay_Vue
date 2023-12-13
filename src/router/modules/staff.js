const staff = [
  {
    path: "/staff",
    component: () => import("../../layouts/staff/index.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("role") == "staff") {
        next();
      } else {
        next("/login");
      }
    },
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
