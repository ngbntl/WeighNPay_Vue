import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import nAuth from "./nAuth";
const routes = [...admin, ...nAuth];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
