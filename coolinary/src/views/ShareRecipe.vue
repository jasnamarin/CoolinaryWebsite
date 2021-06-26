<template>
  <div class="share-recipe">
    <div class="share__container">
      <form v-on:submit.prevent="onSubmit" class="share__form">
        <h2>{{ dictionary.header }}</h2>
        <Button type="submit" :text="dictionary.submit" />
      </form>
    </div>
  </div>
</template>

<script>

import englishDict from "@/assets/language/shareRecipe/eng.json";
import serbianDict from "@/assets/language/shareRecipe/sr.json";

import errorEnglishDict from "@/assets/language/errors/eng.json";
import errorSerbianDict from "@/assets/language/errors/sr.json";

import Button from "@/components/shared/Button.vue";

export default{
  name: "ShareRecipe",
  components: {
    Button,
  },
  props: ["language", "refreshApp"],
  computed: {
    dictionary: function () {
      return this.$props.language === "english" ? englishDict : serbianDict;
    },
    _error: function () {
      const errorDictionary =
        this.$props.language === "english"
          ? errorEnglishDict
          : errorSerbianDict;

      return errorDictionary[this.error] ?? "";
    },
  },
  methods: {
    onSubmit: function () {
      //this.error = "";

      //window.localStorage.setItem("user", JSON.stringify(user));

      //this.$props.refreshApp();

      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
  .share-recipe {
    margin: 200px;
    padding-bottom: 5rem;
    padding-top: 7rem;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    text-align: left;
    overflow-y: auto;

    h2 {
      margin-top: 0;
    }

    Button {
      margin-bottom: 16px;
      min-width: 360px;
      height: 3rem;
    }

    &__container {
      display: flex;
      justify-content: space-around;
      margin-left: 120px;
    }

    &__form {
      margin: 200px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.9);
      padding: 3rem;
    }

  }

</style>