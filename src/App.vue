<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    主组件123
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
