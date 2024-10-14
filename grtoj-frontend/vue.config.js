const { defineConfig } = require("@vue/cli-service");
const GitRevisionPlugin =
  require("git-revision-webpack-plugin").GitRevisionPlugin;
const webpack = require("webpack");

// 实例化 GitRevisionPlugin
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = defineConfig({
  transpileDependencies: true,

  // 配置 devServer，例如更改端口
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8101",
        changeOrigin: true,
      },
    },
  },

  // 扩展 Webpack 配置
  configureWebpack: {
    plugins: [
      // 将 Git 提交哈希和 package.json 的版本信息注入到环境变量
      new webpack.DefinePlugin({
        "process.env.COMMITHASH": JSON.stringify(
          gitRevisionPlugin.commithash()
        ),
        "process.env.VERSION": JSON.stringify(
          require("./package.json").version
        ),
      }),
    ],
  },
});
