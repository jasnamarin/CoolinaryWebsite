<template>
  <div class="profile">
    <h2>{{ dictionary.myRecipes }}</h2>
    <hr />
    <div class="recipes">
      <div :key="recipe.id" v-for="recipe in recipes" class="recipe-card">
        <RecipeCard
          :onDelete="deleteRecipe"
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
      <div v-if="recipes.length === 0">{{ dictionary.noRecipes }}.</div>
    </div>
    <h2>{{ dictionary.myComments }}</h2>
    <hr />
    <div class="comments">
      <div
        :key="comment.userId + index"
        v-for="(comment, index) in comments"
        class="recipe-card"
      >
        &#8220;{{ comment.comment }}&#8221;&nbsp;-&nbsp;<router-link
          :to="'/recipes/recipe/' + comment.recipeId"
          ><span class="aqua_link">{{ comment.recipeName }}</span></router-link
        >
      </div>
      <div v-if="comments.length === 0">{{ dictionary.noComments }}.</div>
    </div>
    <h2>{{ dictionary.myRatings }}</h2>
    <hr />
    <div class="ratings">
      <div
        :key="rating.userId + index"
        v-for="(rating, index) in ratings"
        class="recipe-card"
      >
        {{ dictionary.rated }}
        <router-link :to="'/recipes/recipe/' + rating.recipeId"
          ><span class="aqua_link">{{ rating.recipeName }}</span></router-link
        >
        {{ dictionary.with }} <strong>{{ rating.rating }}</strong
        >&nbsp;{{ dictionary.stars }}.
      </div>
      <div v-if="ratings.length === 0">{{ dictionary.noRatings }}.</div>
    </div>
  </div>
</template>

<script>
import {
  getMyRecipesForLanguage,
  getMyCommentsForLanguage,
  getMyRatingsForLanguage,
  deleteRecipe,
} from "@/utils";

import englishDictionary from "@/assets/language/profile/eng.json"
import serbianDictionary from "@/assets/language/profile/sr.json"

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
  props: ["language", "images", "refreshApp"],
  methods: {
    deleteRecipe: function (recipeId) {
      deleteRecipe(recipeId);
      this.$props.refreshApp();
      this.refreshData();
    },
    refreshData: function () {
      this.recipes = getMyRecipesForLanguage(this.$props.language);
      this.comments = getMyCommentsForLanguage(this.$props.language);
      this.ratings = getMyRatingsForLanguage(this.$props.language);
    },
  },
  computed: {
    dictionary: function() {
      return this.$props.language === "english" ? englishDictionary : serbianDictionary;
    }
  },
  mounted() {
    this.refreshData();
  },
  watch: {
    language: function () {
      this.refreshData();
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  text-align: left;
  margin: 10rem 0 6rem 0;
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

@media only screen and (max-width: 1024px) {
  .profile {
    padding: 0 5%;
  }
}
</style>
