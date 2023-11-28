const nAuth = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/auth/Login.vue"),
  },
];
export default nAuth;
