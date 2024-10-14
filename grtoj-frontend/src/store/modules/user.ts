import { StoreOptions } from "vuex";
import { getLoginUserUsingGet } from "@/api";
import ACCESS_ENUM from "@/permissions/accessEnum";

const state = () => ({
  loginUser: {
    userName: "",
  },
});

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions: {
    async getUserInfo({ commit }) {
      // api 获取用户信息
      const res: any = await getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state().loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, user) {
      state.loginUser = user;
    },
  },
} as StoreOptions<any>;
