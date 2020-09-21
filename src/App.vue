<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // 第一种：本地加载请求静态json文件的方式
    // axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    // });
    // 第二种 本地集成mockjs实现数据mock 灵活可随机生成
    // axios.get("/user/login").then((res) => {
    //   this.res = res;
    // });
  },
};
</script>


<style lang='scss'>
@import "./assets/scss/reset.scss";
</style>
