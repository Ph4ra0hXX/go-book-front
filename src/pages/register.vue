<template>
  <div class="login-container">
    <h2>
      <img
        id="logo_login"
        src="https://raw.githubusercontent.com/Ph4ra0hXX/go-book-front/master/public/logo_noName.png"
        alt=""
      />
    </h2>
    <h2>Cadastro</h2>
    <br />
    <form @submit.prevent="handleRegister">
      <div class="input-group">
        <input type="text" v-model="username" required />
        <label for="Usuário">Usuário</label>
      </div>
      <div class="input-group">
        <input type="email" v-model="email" required />
        <label for="E-mail">E-mail</label>
      </div>
      <div class="input-group">
        <input type="password" v-model="password" required />
        <label for="Senha">Senha</label>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      const toast = useToast();

      try {
        await axios.post("http://localhost:8080/register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        toast.success("Cadastro realizado com sucesso!", {
          timeout: 2000,
        });
        this.$router.push("/login");
      } catch (error) {
        toast.error("Erro ao realizar cadastro. Tente novamente.", {
          timeout: 2000,
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Sora", sans-serif;
  font-weight: 700;
}

#logo_login {
  height: 100px;
}

.login-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 100px auto;
  text-align: center;
  pointer-events: all;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  position: relative;
  margin-bottom: 30px;
}

.input-group input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
  outline: none;
  transition: border-color 0.3s;
}

.input-group label {
  position: absolute;
  left: 10px;
  top: 12px;
  pointer-events: none;
  transition: all 0.3s ease;
  color: #aaa;
}

.input-group input:focus {
  border-color: #653df5;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: -20px;
  left: 0px;
  font-size: 12px;
  color: #653df5;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #653df5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5426f7;
}
</style>
