<template>
  <div id="app">
    <Header v-on:switchLanguage="switchLanguage" :language="language" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  el: "#app",
  data() {
    return {
      show: false,
      language: "english",
    };
  },
  components: { Header, Footer },
  methods: {
    switchLanguage(newLanguage) {
      this.language = newLanguage
    }
  }
};
</script>

<style lang="scss">
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
}

// Global

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