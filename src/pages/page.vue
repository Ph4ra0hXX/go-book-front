<template>
  <div class="book-page">
    <h1>{{ books.title }}</h1>
    <span id="author">{{ books.author }}</span>
    <br />
    <br />

    <p>
      <span
        v-for="(word, index) in words"
        :key="index"
        class="clickable-word"
        @click="handleClick($event, word)"
        @mouseleave="hideTooltip"
      >
        {{ word }}
      </span>
      <span v-if="tooltip.visible" :style="tooltip.style" class="tooltip">{{
        tooltip.text
      }}</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Page",
  data() {
    return {
      text: "",
      books: "",
      tooltip: {
        visible: false,
        text: "",
        style: {},
      },
    };
  },
  mounted() {
    this.getBooks();
    this.getPage();
  },
  computed: {
    words() {
      return this.text.match(/\b[\w'’-]+\b|[\s.,!?;—-]+/g);
    },
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get(
          `http://localhost:8080/books/${this.$route.params.id}`
        );
        this.books = response.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async getPage() {
      try {
        const response = await axios.get(
          `http://localhost:8080/pages/${this.$route.params.id}/pages/1`
        );
        this.text = response.data.text;
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    },
    speak(word) {
      if (!word.trim().match(/[\w'’-]+/)) return;

      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        utterance.rate = 0.75;
        window.speechSynthesis.speak(utterance);
      } else {
        alert("Desculpe, seu navegador não suporta a síntese de fala.");
      }
    },
    async getTranslation(word) {
      try {
        const response = await axios.get(
          `http://localhost:8080/translate/${word}`
        );
        return response.data.translation || "N/A";
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    },
    async handleClick(event, word) {
      this.speak(word);

      try {
        // Aguarda a resposta da tradução antes de continuar
        const translation = await this.getTranslation(word.trim());
        this.tooltip.text = translation;
      } catch (error) {
        console.error("Error getting translation:", error);
        this.tooltip.text = "N/A"; // Define um valor padrão em caso de erro
      }

      // Atualiza o estilo e visibilidade do tooltip
      this.tooltip.style = {
        position: "absolute",
        left: `${event.clientX}px`,
        top: `${event.clientY - 30}px`,
      };
      this.tooltip.visible = true;
    },
    hideTooltip() {
      this.tooltip.visible = false;
    },
  },
};
</script>

<style>
.book-page {
  width: 60%;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
}

#author {
  color: #653df5;
}

.clickable-word {
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin-right: 2px;
  pointer-events: all !important;
  position: relative;
}

.clickable-word:hover {
  color: #653df5;
}

.tooltip {
  background-color: #653df5;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 15px;
  z-index: 1000;
  white-space: nowrap;
}
</style>
