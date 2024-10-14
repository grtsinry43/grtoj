import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";
import store from "@/store";
import ACCESS_ENUM from "@/permissions/accessEnum";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 添加路由守卫，需要登录的页面会检查 token
router.beforeEach((to, from, next) => {
  console.log(store.state.user.loginUser);
  // 检查是否有 UserRole，如果没有就触发登录
  if (to.meta?.requireLogin && !store.state.user.loginUser?.userRole) {
    console.log("触发登录");
    store.dispatch("user/getUserInfo");
  }
  // 检查路由元信息
  if (store.state.user.loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
    // TODO : 覆盖式的登录组件和独立的登录页面
    next({ name: "登录" });
  } else {
    next();
  }
});

// 添加路由守卫，需要管理员权限的页面会检查 isAdmin
router.beforeEach((to, from, next) => {
  // 检查路由元信息
  // 如果是管理员页面，但是不是管理员，跳转到题集页面
  if (to.meta?.adminOnly && store.state.user.loginUser.userRole !== "admin") {
    next({ name: "题集" });
  } else {
    next();
  }
});

export default router;
