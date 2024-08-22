<template>
  <a-layout class="app-container">
    <NavBar />
    <a-layout-content class="main-container">
      <!--<a-layout style="padding: 24px">-->
      <!--  <a-layout-sider width="200px" style="background-color: #f0f2f5">-->
      <!--    侧边栏-->
      <!--  </a-layout-sider>-->
      <!--  <a-layout-content style="background-color: #fff">-->
      <!--    <router-view />-->
      <!--  </a-layout-co<div class="menu-demo">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        />
      </a-menu-item>
      <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">Solution</a-menu-item>
      <a-menu-item key="3">Cloud Service</a-menu-item>
      <a-menu-item key="4">Cooperation</a-menu-item>
    </a-menu>
  </div>ntent>-->
      <!--</a-layout>-->
      <router-view />
    </a-layout-content>
    <a-layout-footer>
      <FooterBar class="footer" />
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.main-container {
  background: linear-gradient(180deg, #f0f2f5 0%, #fff 100%);
  margin-top: 60px;
}
</style>

<script lang="ts">
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar, FooterBar },
  setup() {
    return {};
  },
};
</script>
