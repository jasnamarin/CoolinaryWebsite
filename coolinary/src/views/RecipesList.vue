<template>
  <div class="list">
    <div class="list__container">
      <div v-on:search.prevent="onSearch" class="list__filters">
        <div class="list__item">
            <label for="standard-select">{{dictionary.sort}}</label>
            <div class="select">
                <select id="standard-select">
                    <option value="rating">{{dictionary.rating}}</option>
                    <option value="level">{{dictionary.level}}</option>
                </select>
            </div>
        </div>
        <div class="list__item">
            <Input v-model="search" type="text" />
            <Button type="submit" :text="dictionary.search" />
        <div/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { getRecipesForLanguageAndType } from '@/utils'

import rsLang from '@/assets/language/recipes/sr.json';
import engLang from '@/assets/language/recipes/eng.json';

import Button from "@/components/shared/Button.vue";
import Input from "@/components/shared/Input.vue";

export default {
  name: 'RecipesList',
  props: ["language"],
  data() {
    return {
      recipes: [],
    }
  },
  components: {
      Button,
      Input
  },
  computed: {
    dictionary: function () {
      return this.$props.language === "english" ? engLang : rsLang;
    },
  },
  mounted() {
    const type = this.$route.fullPath.split("/").slice(-1)[0];
    this.recipes = getRecipesForLanguageAndType(this.$props.language, type)
  },
  watch: {
    language: function(language) {
      const type = this.$route.fullPath.split("/").slice(-1)[0];
      this.recipes = getRecipesForLanguageAndType(language, type)
    }
  },
  methods: {
    onSearch: function () {
        console.log()
        //search();
      //this.$router.push("/recipe-details");
    },
  },
};
</script>

<style lang="scss" scoped>

    select {
        width: 100%;
        min-width: 15ch;
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

    select::-ms-expand {
        display: none;
    }

    .list {
        margin: 5rem auto;
        width: 100vw;
        height: 100vh;

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
            display: flex;
            justify-content: space-around;
            padding-top: 40px;
        }

        &__filters {
            display: flex;
            padding: 1rem auto;
            align-items: center;
            justify-content: space-between;
            position: fixed;
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