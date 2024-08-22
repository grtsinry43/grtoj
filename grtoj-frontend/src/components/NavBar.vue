<script setup lang="ts">
import logo from "@/assets/logo.png";
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const menuItemClickHandle = (key: string) => {
  router.push(key);
};

const curMenuItem = ref(["/"]);

router.afterEach((to) => {
  curMenuItem.value = [to.path];
});
</script>

<template>
  <a-layout-header class="nav-container">
    <a-menu
      mode="horizontal"
      :selected-keys="curMenuItem"
      @menu-item-click="menuItemClickHandle"
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
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
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
</style>
