<script setup lang="ts">
import { ref } from "vue";
import { UserLoginRequest, userLoginUsingPost } from "@/api";
import message from "@arco-design/web-vue/es/message";
import router from "@/router";
import store from "@/store";

const form = ref({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const handleSubmit = async () => {
  for (let valueKey in form.value) {
    if (!form.value[valueKey]) {
      message.error(`${valueKey} 不能为空 `);
      return;
    }
  }
  const res: any = await userLoginUsingPost({
    body: form.value,
  });
  if (res.data.code !== 0) {
    message.error(res.data.message);
  } else {
    message.success("登录成功");
    store.dispatch("user/getUserInfo");
    console.log(store.state.loginUser);
    setTimeout(() => {
      router.push({
        path: "/",
        replace: true,
      });
    }, 1000);
  }
};
</script>

<template>
  <div class="login-container">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="username" label="用户名">
        <a-input v-model="form.userAccount" placeholder="请输入您的用户名..." />
      </a-form-item>
      <a-form-item field="password" tooltip="密码长度不少于8位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入您的密码..."
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
