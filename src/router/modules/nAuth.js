const nAuth = [
  {
    path: "/login",
    name: "login",
    component: () => import("../../layouts/auth/Login.vue"),
  },
];

export default nAuth;
