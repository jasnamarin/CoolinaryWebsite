<template>
  <div class="profile">
    <h2>My recipes</h2>
    <hr />
    <div class="recipes">
      <div :key="recipe.id" v-for="recipe in recipes" class="recipe-card">
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
      <div v-if="recipes.length === 0">You don't have any recipes.</div>
    </div>
    <h2>My comments</h2>
    <hr />
    <div class="comments">
      <div
        :key="comment.userId + index"
        v-for="(comment, index) in comments"
        class="recipe-card"
      >
        &#8220;{{ comment.comment }}&#8221;&nbsp; -&nbsp;<router-link
          :to="'/recipes/recipe/' + comment.recipeId"
          ><span class="aqua_link">{{ comment.recipeName }}</span></router-link
        >
      </div>
      <div v-if="comments.length === 0">You didn't post any comments.</div>
    </div>
    <h2>My ratings</h2>
    <hr />
    <div class="ratings">
      <div
        :key="rating.userId + index"
        v-for="(rating, index) in ratings"
        class="recipe-card"
      >
        Rated
        <router-link :to="'/recipes/recipe/' + rating.recipeId"
          ><span class="aqua_link">{{ rating.recipeName }}</span></router-link
        >
        with <strong>{{ rating.rating }}</strong>&nbsp; stars.
      </div>
      <div v-if="ratings.length === 0">You didn't post any ratings.</div>
    </div>
  </div>
</template>

<script>
import {
  getMyRecipesForLanguage,
  getMyCommentsForLanguage,
  getMyRatingsForLanguage,
} from "@/utils";

import RecipeCard from "@/components/shared/RecipeCard";

export default {
  data() {
    return {
      recipes: [],
      comments: [],
      ratings: [],
    };
  },
  name: "Profile",
  components: { RecipeCard },
  props: ["language", "images"],
  mounted() {
    this.recipes = getMyRecipesForLanguage(this.$props.language);
    this.comments = getMyCommentsForLanguage(this.$props.language);
    this.ratings = getMyRatingsForLanguage(this.$props.language);
  },
  watch: {
    language: function (language) {
      this.recipes = getMyRecipesForLanguage(language);
      this.comments = getMyCommentsForLanguage(language);
      this.ratings = getMyRatingsForLanguage(language);
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  text-align: left;
  margin: 7rem 0;
  padding: 0 20%;
}

.recipe-card {
  margin: 2rem auto;
}

a {
  text-decoration: none;
  color: var(--color-default);
}

.aqua_link {
  color: var(--color-aqua);
  text-decoration: underline;
}
</style>
