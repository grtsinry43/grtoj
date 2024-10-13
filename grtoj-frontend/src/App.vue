<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { printGitInfo } from "@/utils/gitInfo";

const doInit = () => {
  printGitInfo();
};

onMounted(() => {
  doInit();
});
</script>
