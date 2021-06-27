<template>
  <div class="card">
    <article class="blog-card">
      <img
        class="post-image"
        src="../../assets/images/thumbnails/dessert-thumbnail.jpg"
      />
      <div class="article-details">
        <h4 class="post-category">{{ category }}</h4>
        <h3 class="post-title">{{ name }}</h3>
        <p class="post-description">
          {{ dictionary.difficulty }}: {{ level }} / 5 &nbsp; &nbsp; &nbsp;
          &nbsp; {{ dictionary.estimatedTime }}: {{ time }}
        </p>
        <p class="rating">
          <star-rating
            :read-only="!isLoggedIn"
            :show-rating="false"
            v-model:rating="_rating"
          ></star-rating>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import engDictionary from "@/assets/language/recipe-card/eng.json";
import srDictionary from "@/assets/language/recipe-card/sr.json";

import StarRating from "vue-star-rating";

export default {
  name: "RecipeCard",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = !!window.localStorage.getItem("user");
  },
  props: [
    "name",
    "thumbnail",
    "category",
    "level",
    "time",
    "rating",
    "language",
  ],
  components: {
    StarRating,
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
  },
};
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

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

.blog-card {
  max-width: 60rem;
  display: flex;
  flex-direction: row;
  background: $white;
  box-shadow: 0 0.1875rem 1.5rem $shadow;
  border-radius: 0.375rem;
  overflow: hidden;
  text-align: left;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover .post-title {
    @include transition(color 0.3s ease);
    color: $red;
  }
  &:hover .post-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.post-image {
  @include transition(opacity 0.3s ease);
  display: block;
  width: 100%;
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
  @include transition(color 0.3s ease);
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

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    height: 27.25rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .post-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .card {
    max-width: 736px;
  }
}
</style>