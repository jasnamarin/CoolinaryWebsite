<template>
  <div class="recipes-list">
    Recipes List
  </div>
</template>

<script>
import rsLang from '@/assets/language/recipes/sr.json';
import engLang from '@/assets/language/recipes/eng.json';

export default {
  name: 'RecipesList',
  props: ["language"],
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },computed: {
    dictionary: function () {
      console.log(this.$props.language)
      return this.$props.language === "english" ? engLang : rsLang;
    },
  },
};
</script>