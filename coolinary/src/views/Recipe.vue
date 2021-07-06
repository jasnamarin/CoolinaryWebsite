<template>
  <div class="recipe">
    <div class="recipe__overviewContainer" :style="{ backgroundImage: `url(${bannerSrc})` }">
      <div class="recipe__overview">
        <div>
          <h4 class="post-category">{{ recipe.category }}</h4>
          <h3 class="post-title">{{ recipe.name }}</h3>
          <p>
            {{ dictionary.difficulty }}: {{ recipe.level }} / 5 &nbsp; &nbsp; &nbsp;
            &nbsp; {{ dictionary.estimatedTime }}: {{ recipe.time }}
          </p>
      </div>
      </div>
    </div>

    <div class="recipe__details">
      <h2>{{ dictionary.ingredients }}</h2>
      <hr />

      <ul>
        <li v-for="item in recipe.ingredients" :key="item">
          {{ item }}
        </li>
      </ul>

      <h2>{{ dictionary.instructions }}</h2>
      <hr />

      <p>
        {{recipe.instructions}}
      </p>

      <h2>{{ dictionary.gallery }}</h2>
      <hr />
      <div class="gallery-container">
        <div class="gallery" v-for="image in recipe.photo" :key="image">
          <img :src="getSrc(image)" alt="">
        </div>
      </div>

      <hr/>
      <h2>{{ dictionary.rating }}: &nbsp;
        <star-rating
          :inline="true" 
          :star-size="25"
          :read-only="!isLoggedIn"
          :show-rating="false"
          :v-model:rating="_rating"
        ></star-rating>
      </h2>
      <hr/>

      <h2>{{ dictionary.comments }}</h2>
      <hr />
      <div class="comments">
        <div
          :key="recipe.comments.userId + index"
          v-for="(comment, index) in recipe.comments"
          class="recipe-card"
        >
          &#8220;{{ comment.comment }}&#8221; - {{ comment.user }}
        </div>
        <div v-if="recipe.comments.length === 0">{{ dictionary.noComments }}.</div>
      </div>

      <h2>
        <Label for="comment" :text="dictionary.insertComment" />
        <span>
        <Input v-model="comment" type="text" />
        <Button type="submit" :text="dictionary.submit" />
        </span>
      </h2>
    </div>

  </div>
</template>

<script>
import { getRecipesForLanguage } from '@/utils'

import engDictionary from "@/assets/language/recipe-card/eng.json";
import srDictionary from "@/assets/language/recipe-card/sr.json";

import StarRating from "vue-star-rating";

import Input from "@/components/shared/Input.vue";
import Label from "@/components/shared/Label.vue";
import Button from "@/components/shared/Button.vue";

import bannerAppetizer from "../assets/images/banners/appetizer.jpg";
import bannerMainDish  from "../assets/images/banners/main-dish.jpg";
import bannerDessert from "../assets/images/banners/dessert.jpg";
import bannerSnack from "../assets/images/banners/snack.jpg";

export default {
  name: 'Recipe',
  data() {
    return {
      bannerMainDish,
      bannerAppetizer,
      bannerSnack,
      bannerDessert,
      isLoggedIn: false,
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id, 10);
    const recipes = getRecipesForLanguage(this.$props.language)

    this.recipe = recipes.find(recipe => recipe.id === id) ?? {};
    this.isLoggedIn = !!window.localStorage.getItem("user");
  },
  props: [
    "language", "images",
  ],
  components: {
    StarRating,
    Input,
    Label,
    Button,
  },
  methods: {
    getSrc(image) {
      return `data:image/png;base64, ${this.$props.images[image]}`;
    }
  },
  computed: {
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
    recipe: function () {
      const id = parseInt(this.$route.params.id, 10);
      const recipes = getRecipesForLanguage(this.$props.language)
      return recipes.find(recipe => recipe.id === id) ?? {};
    },
    bannerSrc: function () {
      if (this.recipe.type == "appetizers")
        return bannerAppetizer;
      else if (this.recipe.type == "main-dishes")
        return bannerMainDish;
      else if (this.recipe.type == "snacks")
        return bannerSnack;
      else
        return bannerDessert;
    }
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
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: gray;
    background-size: cover;
    background-position-y: 68%;
  }

  &__overview {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2.5rem;
    border-radius: 20px;
    width: fit-content;
    margin: 1rem 1rem;
    display: flex;
    align-items: center;
    height: 120px;
    text-align: left;
  }

  &__details {
    padding: 1rem 10rem 1rem 10rem;
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

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 1rem 1rem 1rem 0;
}

.gallery {

    img {
      width: 100%;
      height: 16vw;
      object-fit: cover;
      border-radius: 0.75rem;
      transition: all 0.2s;

      &:hover {
        transition: all 0.2s;
        box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);;
      }
    }
  }

  Button {
    margin-top: 1rem;
    min-width: 150px;
    min-height: 30px;
    background-color: gray;

    &:hover {
      box-shadow: 0 0 5px gray;
    }
  }

  Input {
    width: 30rem;
    line-height: 2;
    &:focus {
      transition: all 0.3s;
      box-shadow: 0 0 5px gray;
      border: 1px solid gray;
      outline: none;
    }
  }

</style>