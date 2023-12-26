const nAuth = [
  {
    path: "/login",
    name: "login",
    component: () => import("../../layouts/auth/Login.vue"),
  },
  {
    path: "/chagePass",
    name: "changePass",
    component: () => import("../../layouts/auth/ChangePass.vue"),
  },
];

export default nAuth;
