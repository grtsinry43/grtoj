<template>
  <div id="app">
    <template v-if="router.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { printGitInfo } from "@/utils/gitInfo";
import { useRoute } from "vue-router";

const router = useRoute();

const doInit = () => {
  printGitInfo();
};

onMounted(() => {
  doInit();
});
</script>
