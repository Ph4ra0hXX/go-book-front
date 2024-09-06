<template><Header /><router-view></router-view> <Footer /></template>

<script>
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
export default {
  name: "App",
  components: {
    Home,
    Footer,
    Header,
  },
};
</script>

<style></style>
