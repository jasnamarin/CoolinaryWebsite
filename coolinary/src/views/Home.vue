<template>
  <div class="home">
    <div class="backgroundImage">
      <div class="backgroundImage__text"><h1>{{ dictionary.favouriteRecipes }}</h1>
      <u><h2>{{ dictionary.onePlace }}.</h2></u></div>
    </div>
    <div class="home__container">
      <div class="home__container--section">
        <h2>{{ dictionary.topRecipes }}</h2>
      <hr />
      <div v-for="recipe in bestRecipes" :key="recipe.id" class="recipe-card">
        <RecipeCard
          :id="recipe.id"
          :name="recipe.name"
          :thumbnail="images[recipe.thumbnail]"
          :category="recipe.category"
          :level="recipe.level"
          :time="recipe.time"
          :language="language"
          :rating="recipe.rating"
        />
      </div>
      </div>
      <div class="home__container--section">
        <h2>{{ dictionary.bestBlogs }}</h2>
      <hr />
      </div>
      <div class="home__container--section">
        <h2>{{ dictionary.bestBlogs }}</h2>
      <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { getBest3RecipesForLanguage } from "@/utils";

import engDictionary from '@/assets/language/home/eng.json'
import srDictionary from '@/assets/language/home/sr.json'

import RecipeCard from "@/components/shared/RecipeCard.vue";

export default {
  name: "Home",
  components: {
    RecipeCard,
  },
  data() {
    return {
      bestRecipes: [],
    };
  },
  props: ["language", "images"],
  mounted() {
    this.bestRecipes = getBest3RecipesForLanguage();
  },
  computed: {
    dictionary: function() {
      return this.$props.language === "english" ? engDictionary : srDictionary;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: var(--color-primary);
}
.recipe-card {
  margin: 2rem auto;
}

.backgroundImage {
  width: 100vw;
  height: 600px;
  background-image: url("../assets/images/home_background.jpg");
  color: white;
  display: flex;
  align-items: center;
  padding-left: 15%;
  margin-bottom: 40px;
  font-family: 'TitleFont';

  &__text {
    margin-top: -120px;
  }

  p, h1, h2, u {
    color: white;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-size: 40px;
  }
}

.home {
  margin: 7rem 0 6rem 0;

  &__container {
    padding: 0 20%;
    text-align: left;

    &--section {
      margin-bottom: 40px;
    }
  }
}

a {
  text-decoration: none;
  color: var(--color-default);
}

@media only screen and (max-width: 1024px) {
  .home__container {
    padding: 0 5%;
  }

  .backgroundImage {
    height: 400px;
  }
}
</style>
