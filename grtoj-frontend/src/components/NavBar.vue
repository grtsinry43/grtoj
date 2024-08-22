<script setup lang="ts"></script>

<template>
  <a-layout-header class="nav-container">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
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
</style>
