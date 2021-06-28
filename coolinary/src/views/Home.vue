<template>
  <div class="home">
    <h2>Top 3 recipes</h2>
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
</template>

<script>
import { getBest3RecipesForLanguage } from "@/utils";
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
};
</script>

<style lang="scss" scoped>
* {
  color: var(--color-primary);
}
.recipe-card {
  margin: 2rem auto;
}

.home {
  text-align: left;
  margin: 10rem 0 6rem 0;
  padding: 0 20%;
}

a {
  text-decoration: none;
  color: var(--color-default);
}
</style>
