<script setup lang="ts">
import logo from "@/assets/logo.png";
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();

const menuItemClickHandle = (key: string) => {
  router.push(key);
};

const curMenuItem = ref(["/"]);

router.afterEach((to) => {
  curMenuItem.value = [to.path];
});

const store = useStore();
setTimeout(() => {
  store.dispatch("user/getUserInfo");
}, 3000);

const visibleRoutes = computed(() =>
  routes.filter((route) => route.meta?.visible)
);
</script>

<template>
  <a-layout-header class="nav-container">
    <a-row style="width: 100%" align="center">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="curMenuItem"
          @menu-item-click="menuItemClickHandle"
          class="nav-inner"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="logo-container">
              <img :src="logo" alt="grtoj-logo" />
            </div>
            <h1 style="display: none">GRTOJ</h1>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px" class="cur-user">
        <div>{{ store.state.user.loginUser.userName }}</div>
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
  padding: 0 50px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}

.logo-container img {
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
}

.logo-container {
  height: 100%;
  display: flex;
}

.nav-inner {
  text-align: start;
}
</style>
