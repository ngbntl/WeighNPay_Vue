import { createRouter, createWebHistory } from "vue-router";
import admin from "./modules/admin";
import nAuth from "./modules/nAuth";
import home from "./modules/home";
import staff from "./modules/staff";
const routes = [...admin, ...nAuth, ...staff, ...home];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
