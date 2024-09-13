<template>
  <Header />

  <div class="sobre-mim">
    <h2>Sobre Mim</h2>
    <p>
      Olá! Meu nome é Wesley Jonatha e este projeto é parte do meu Trabalho de
      Conclusão de Curso (TCC) da disciplina TRABALHO DE CONCLUSÃO DE CURSO II.
    </p>

    <h2>Contato</h2>
    <p>Email: ph4ra0hx@gmail.com</p>
  </div>
</template>

<script>
import Header from "../components/header.vue";

export default {
  components: {
    Header,
  },
  name: "SobreMim",
};
</script>

<style scoped>
.sobre-mim {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.sobre-mim h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
}

.sobre-mim p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
}

.sobre-mim h2 {
  font-size: 1.8em;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #444;
}

.sobre-mim ul {
  list-style-type: none;
  padding: 0;
}

.sobre-mim li {
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #666;
}

.sobre-mim a {
  color: #3498db;
  text-decoration: none;
}

.sobre-mim a:hover {
  text-decoration: underline;
}
</style>
