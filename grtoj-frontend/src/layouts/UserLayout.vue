<template>
  <a-layout class="app-container">
    <a-layout-content class="main-container">
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

export default {
  components: { FooterBar },
  setup() {
    return {};
  },
};
</script>
