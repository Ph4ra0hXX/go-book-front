<template>
  <div id="header">
    <button class="header-btn">Home</button>
    <img src="logo.png" alt="Logo" class="header-logo" />
    <button class="header-btn">Sobre</button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
#header {
  background-color: #1e1f20;
  width: 300px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateX(10deg);
  margin-top: 50px;

  margin-bottom: 50px;
}

.header-btn {
  background-color: #141516;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 5px 10px;
  font-weight: 500;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.header-btn:hover {
  background-color: #653df5;
  transform: translateY(-2px);
}

.header-logo {
  height: 90px;
  cursor: pointer;
  margin-bottom: 40px;
  pointer-events: auto;
  transform: perspective(1000px) rotateX(10deg);
}
</style>
