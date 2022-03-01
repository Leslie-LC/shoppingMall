<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在login、register模块隐藏 -->
    <!-- v-show="$route.path !== '/login' && $route.path !== '/register'" -->
    <Footer
      v-show="$route.path == '/home' || $route.path == '/search'"
    ></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang='less' scoped>
</style>
