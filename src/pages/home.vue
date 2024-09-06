<template>
  <Header />
  <br />

  <div
    v-for="(group, groupIndex) in groupedBooks"
    :key="groupIndex"
    class="bookshelf"
  >
    <div class="books">
      <div
        v-for="(book, bookIndex) in group"
        @click="goToBook(book.id)"
        :key="bookIndex"
        class="book"
        :style="{ '--bg-image': `url(${book.image})` }"
      ></div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import Page from "./page.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Page,
    Header,
    Footer,
  },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    goToBook(bookID) {
      this.$router.push(`/page/${bookID}`);
    },
    async getBooks() {
      try {
        const response = await axios.get("http://localhost:8080/books");
        this.books = response.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
  },
  computed: {
    groupedBooks() {
      const groups = [];
      for (let i = 0; i < this.books.length; i += 4) {
        groups.push(this.books.slice(i, i + 4));
      }
      return groups;
    },
  },
};
</script>

<style>
body {
  pointer-events: none;
}

.bookshelf {
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  z-index: -1;
  position: relative;
  height: 0px;
  box-sizing: border-box;
  border-bottom: 16px solid #1e1f20;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  pointer-events: all;
  margin: 300px auto;
}

.bookshelf::before {
  content: "";
  position: absolute;
  top: 16px;
  background: linear-gradient(90deg, #141516 0%, #141516 100%);
  height: 26px;
  width: calc(100% + 40px);
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.bookshelf::after {
  content: "";
  height: 80px;
  width: calc(100% + 40px);
  position: absolute;
  top: 42px;
  display: block;
  background: linear-gradient(
    180deg,
    #1415160e 0%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%);
  z-index: -1;
}

.books {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10%;
  width: 95%;
  margin: auto;
  transform: translateY(-100%);
  padding: 0 0 2px;
  position: relative;
  top: 10px;
}

.book {
  width: 100%;
  border-radius: 3px 0.5px 0.5px 3px;
  aspect-ratio: 115/180;
  position: relative;
  cursor: pointer;
}

.book:hover::before,
.book:hover::after {
  transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.book:hover::before {
  transform: translate(0, -70px) skew(3deg, -3deg) scale(1.35);
}

.book:hover::after {
  transform: translate(0, -70px) skew(3deg, -3deg) scale(1.275);
}

.book:hover:nth-of-type(even)::before {
  transform: translate(0, -70px) skew(-3deg, 3deg) scale(1.35);
}

.book:hover:nth-of-type(even)::after {
  transform: translate(0, -70px) skew(-3deg, 3deg) scale(1.275);
}

.book::before,
.book::after {
  position: absolute;
  width: 100%;
  display: block;
  content: " ";
  transition: all 300ms ease-out;
  background: var(--bg-image) center center/cover no-repeat;
}

.book::before {
  height: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25),
    inset 2px 0px 2px 1px rgba(29, 27, 27, 0.2);
}
</style>
