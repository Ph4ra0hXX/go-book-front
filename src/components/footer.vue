<template>
  <div id="footer">
    <img
      src="https://raw.githubusercontent.com/Ph4ra0hXX/go-book-front/master/public/logo.png"
      alt="Logo"
      class="footer-logo"
    />
    <p class="copyright">&copy; 2024 TCC. Wesley Jonatha - 22314803-5</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  background-color: #1e1f20;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-logo {
  height: 50px;
  margin-bottom: 25px;
}

.copyright {
  color: #fff;
  font-size: 14px;
  margin: 0;
}
</style>
