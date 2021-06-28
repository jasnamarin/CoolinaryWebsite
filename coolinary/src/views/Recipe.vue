<template>
  <div class="recipe">
    <div class="recipe__overviewContainer">
      <div class="recipe__overview">
        <div class="article-details">
          <h4 class="post-category">{{ recipe.category }}</h4>
          <h3 class="post-title">{{ recipe.name }}</h3>
          <p class="post-description">
            {{ dictionary.difficulty }}: {{ recipe.level }} / 5 &nbsp; &nbsp; &nbsp;
            &nbsp; {{ dictionary.estimatedTime }}: {{ recipe.time }}
          </p>
          <p class="rating">
            <star-rating
              :read-only="!isLoggedIn"
              :show-rating="false"
              v-model:rating="_rating"
            ></star-rating>
          </p>
      </div>
      </div>
    </div>

    <img :key="image" v-for="image in recipe.photo" :src="getSrc(image)" alt="">

  </div>
</template>

<script>
import { getRecipesForLanguage } from '@/utils'

import engDictionary from "@/assets/language/recipe-card/eng.json";
import srDictionary from "@/assets/language/recipe-card/sr.json";

import StarRating from "vue-star-rating";


export default {
  name: 'Recipe',
  data() {
    return {
      recipe: {},
      isLoggedIn: false,
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id, 10);
    const recipes = getRecipesForLanguage(this.$props.language)

    this.recipe = recipes.find(recipe => recipe.id === id) ?? {};
    this.isLoggedIn = !!window.localStorage.getItem("user");

    console.log(this.$props.images)
  },
  props: [
    "language", "images",
  ],
  components: {
    StarRating,
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
    getSrc(image) {
      console.log(image)
      return `data:image/png;base64, ${this.$props.images[image]}`;
    }
  },
  computed: {
    _src: function() {
      //return `data:image/png;base64, ${images[this.recipe.thumbnail]}`;
      return `data:image/png;base64, ${this.thumbnail}`;
    },
    _rating: {
      get: function () {
        return this.$props.rating;
      },
      set: function (newValue) {
        this.$emit("update:rating", newValue);
      },
    },
    dictionary: function () {
      return this.$props.language === "english" ? engDictionary : srDictionary;
    },
  },
}
</script>

<style lang="scss" scoped>


$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

.recipe {
  height: 100vh;
  padding-top: 7rem;
  padding-bottom: 7rem;
  overflow-y: auto;

  &__overviewContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: gray;
    background-image: url("../assets/images/thumbnails/appetizer-thumbnail.jpg");
  }

  &__overview {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem 10rem 1rem 10rem;
    border-radius: 20px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    height: 200px;
    text-align: left;
  }
}


.post-image {
  @include transition(opacity 0.3s ease);
  display: block;
  max-height: 240px;
  min-height: 240px;
  width: 320px;
  object-fit: cover;
}

.article-details {
  padding: 1.5rem;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.post-title {
  font-size: 1.125rem;
  line-height: 1.4;
  color: $black;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.rating {
  font-size: 0.875rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid $border;
}
</style>