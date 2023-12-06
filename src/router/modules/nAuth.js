const nAuth = [
  {
    path: "/login",
    name: "login",
    component: () => import("../../layouts/auth/Login.vue"),
  },

  {
    path: "/register",
    name: "register",
    component: () => import(""),
  },
];

export default nAuth;
