import { StoreOptions } from "vuex";

// 定义类型，解决ts报错
export interface User {
  userName: string;
  userRole?: string;
}

interface State {
  loginUser: User;
}

const state = () => ({
  loginUser: {
    userName: "test",
  },
});

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions: {
    getUserInfo({ commit }) {
      // TODO: api获取用户信息
      commit("updateUser", {
        userName: "Just Login",
        userRole: "admin",
      });
    },
  },
  mutations: {
    updateUser(state, user) {
      state.loginUser = user;
    },
  },
} as StoreOptions<State>;
