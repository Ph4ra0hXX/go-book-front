<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
import Login from "./pages/login.vue";

export default {
  name: "App",
  components: {
    Home,
    Footer,
    Login,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  flex: 1;
}
</style>
