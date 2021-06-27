
<template>
  <div class="list">
    <div class="list__container">
      <div class="list__filters">
        <div class="list__item">
          <label for="standard-select">{{ dictionary.sort }}</label>
          <div class="select">
            <select v-model="sort" id="standard-select">
              <option value="rating">{{ dictionary.rating }}</option>
              <option value="level">{{ dictionary.level }}</option>
            </select>
          </div>
        </div>
        <div class="list__item">
          <Input v-model="search" type="text" />
          <Button @click="onSearch" type="submit" :text="dictionary.search" />
        </div>
      </div>

      <div class="recipes">
        <div
          :key="recipe.id"
          v-for="recipe in filteredRecipes"
          class="recipe-card"
        >
          <RecipeCard
            :name="recipe.name"
            thumbnail="../../assets/images/thumbnails/dessert-thumbnail.jpg"
            :category="recipe.category"
            :level="recipe.level"
            :time="recipe.time"
            :language="language"
            :rating="recipe.rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecipesForLanguageAndType } from "@/utils";

import rsLang from "@/assets/language/recipes/sr.json";
import engLang from "@/assets/language/recipes/eng.json";

import Button from "@/components/shared/Button.vue";
import Input from "@/components/shared/Input.vue";
import RecipeCard from "@/components/shared/RecipeCard.vue";

export default {
  name: "RecipesList",
  props: ["language"],
  data() {
    return {
      search: "",
      recipes: [],
      filteredRecipes: [],
      sort: "rating",
    };
  },
  components: {
    Button,
    Input,
    RecipeCard,
  },
  computed: {
    dictionary: function () {
      return this.$props.language === "english" ? engLang : rsLang;
    },
  },
  mounted() {
    const type = this.$route.fullPath.split("/").slice(-1)[0];
    this.recipes = getRecipesForLanguageAndType(
      this.$props.language,
      type
    ).sort(this.getSort());
    this.filteredRecipes = this.recipes;
  },
  watch: {
    language: function (language) {
      const type = this.$route.fullPath.split("/").slice(-1)[0];
      this.recipes = getRecipesForLanguageAndType(language, type);
    },
    sort: function () {
      this.filteredRecipes = this.filteredRecipes.sort(this.getSort());
    },
  },
  methods: {
    getSort: function () {
      if (this.sort === "level") {
        return (a, b) => b.level - a.level;
      }

      return (a, b) => b.rating - a.rating;
    },
    onSearch: function () {
      this.filteredRecipes = this.recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort(this.getSort());
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-card {
  margin: 2rem auto;
}

select {
  width: 100%;
  max-width: 30ch;
  border: none;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: inherit;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  align-items: center;
  outline: none;
}

.recipes {
  margin-top: 4rem;
}

select::-ms-expand {
  display: none;
}

.list {
  margin: 7rem auto 5rem auto;
  width: 100vw;

  Button {
    margin: 0rem 1rem 0rem 1rem;
    min-width: 150px;
    min-height: 30px;
    background-color: gray;

    &:hover {
      box-shadow: 0 0 5px gray;
    }
  }

  Input {
    &:focus {
      transition: all 0.3s;
      box-shadow: 0 0 5px gray;
      border: 1px solid gray;
      outline: none;
    }
  }

  &__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__filters {
    display: flex;
    padding: 3rem 1rem 1rem 1rem;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 4rem;
    background: #fff;
    width: 100%;
  }

  &__item {
    position: relative;
    display: flex;
    margin-left: 2rem;
    align-items: center;
  }
}
</style>