import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "题集",
    component: HomeView,
    meta: {
      adminOnly: false,
      requireLogin: false,
      visible: true,
    },
  },
  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      adminOnly: false,
      requireLogin: false,
      visible: true,
    },
  },
  {
    path: "/admin",
    name: "管理员",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
    meta: {
      adminOnly: true,
      requireLogin: true,
      visible: false,
    },
  },
  {
    path: "/login",
    name: "登录",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    meta: {
      adminOnly: false,
      requireLogin: false,
      visible: false,
    },
  },
];
