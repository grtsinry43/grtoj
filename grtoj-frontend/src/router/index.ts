import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 添加路由守卫，需要登录的页面会检查 token
router.beforeEach((to, from, next) => {
  // 检查路由元信息
  if (to.meta?.requireLogin && !localStorage.getItem("token")) {
    if (to.name === "管理员") {
      return;
    }
    // TODO : 覆盖式的登录组件和独立的登录页面
    next({ name: "登录" });
  } else {
    next();
  }
});

// // 添加路由守卫，需要管理员权限的页面会检查 isAdmin
// router.beforeEach((to, from, next) => {
//   // 检查路由元信息
//   if (to.meta?.adminOnly && !localStorage.getItem("isAdmin")) {
//     next({ name: "题集" });
//   } else {
//     next();
//   }
// });

export default router;
