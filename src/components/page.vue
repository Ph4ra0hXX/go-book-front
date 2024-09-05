<template>
  <div class="book-page">
    <h1>Throne Of Glass</h1>
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
export default {
  name: "Page",
  data() {
    return {
      text: `After a year of slavery in the Salt Mines of Endovier, Celaena Sardothien was
      accustomed to being escorted everywhere in shackles and at sword-point. Most
      of the thousands of slaves in Endovier received similar treatment—though an
      extra half-dozen guards always walked Celaena to and from the mines. That was
      expected by Adarlan’s most notorious assassin. What she did not usually expect,
      however, was a hooded man in black at her side—as there was now.
      He gripped her arm as he led her through the shining building in which most
      of Endovier’s officials and overseers were housed.`,
      tooltip: {
        visible: false,
        text: "",
        style: {},
      },
    };
  },
  computed: {
    words() {
      return this.text.match(/\b[\w'’-]+\b|[\s.,!?;—-]+/g);
    },
  },
  methods: {
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
    getTranslation(word) {
      const translations = {
        After: "Depois",
        year: "ano",
        of: "de",
        slavery: "escravidão",
        // Add more translations as needed
      };
      return translations[word] || "N/A";
    },
    handleClick(event, word) {
      this.speak(word);

      const translation = this.getTranslation(word.trim());
      this.tooltip.text = translation;
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

.clickable-word {
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: 19px;
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
