<template>
  <div id="app">
    <Header
      :refreshApp="refreshApp"
      :isLoggedIn="isLoggedIn"
      v-on:switchLanguage="switchLanguage"
      :language="language"
    />
    <router-view :images="images" :refreshApp="refreshApp" :language="language" />
    <Footer />
  </div>
</template>

<script>
import { defaultThumbnails } from "@/assets/data/defaults";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  el: "#app",
  data() {
    return {
      show: false,
      language: "english",
      isLoggedIn: false,
      images: {},
    };
  },
  components: { Header, Footer },
  methods: {
    switchLanguage(newLanguage) {
      this.language = newLanguage;
    },
    refreshApp() {
      this.isLoggedIn = !!window.localStorage.getItem("user");
    },
  },
  mounted() {
    this.isLoggedIn = !!window.localStorage.getItem("user");
    this.images = defaultThumbnails;
  },
};
</script>

<style lang="scss">
.H_ui {
  visibility: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primary);
}

:root {
  --font-primary: "Open Sans", sans-serif;
  --color-gray: #dadce0;
  --color-primary: #2c3e50;
  --color-green: #17bf63;
  --color-red: #f4394d;
  --color-blue: #0d82eb;
  --color-aqua: #65BBE9;
}

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  -webkit-text-size-adjust: 100%;
  font-family: var(--font-primary);
  overflow: visible;
  padding: 0;
  margin: 0;
}

hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid var(--color-gray);
}
</style>