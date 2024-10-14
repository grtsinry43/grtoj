<script setup lang="ts">
import logo from "@/assets/logo.png";
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/permissions/checkAccess";

const router = useRouter();

const menuItemClickHandle = (key: string) => {
  router.push(key);
};

const curMenuItem = ref(["/"]);

router.afterEach((to) => {
  curMenuItem.value = [to.path];
});

const store = useStore();

console.log("Navbar拿到的数据");
console.log(store.state.user.loginUser);

const loginUser = computed(() => store.state.user.loginUser);
console.log("loginUser");
console.log(loginUser.value);
const visibleRoutes = computed(() =>
  routes.filter((item) => {
    if (!item.meta?.visible) {
      return false;
    }
    return checkAccess(loginUser.value, item.meta?.access as string);
  })
);
</script>

<template>
  <a-layout-header class="nav-container">
    <a-row style="width: 100%" align="center" :wrap="false">
      <a-col flex="100px">
        <div class="logo-container">
          <img :src="logo" alt="grtoj-logo" />
        </div>
        <h1 style="display: none">GRTOJ</h1>
      </a-col>
      <a-col flex="auto" style="align-items: start">
        <a-menu
          mode="horizontal"
          :selected-keys="curMenuItem"
          @menu-item-click="menuItemClickHandle"
          class="nav-inner"
        >
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px" class="cur-user">
        <div>{{ loginUser.userName }}111</div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style scoped>
.nav-container {
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}

.logo-container img {
  height: 25px;
}

.logo-container {
  height: 100%;
  display: flex;
}

.nav-inner {
  text-align: start;
}
</style>
