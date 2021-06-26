<template>
  <div>
    <h1>Recipes List</h1>
  </div>
</template>

<script>
import rsLang from '@/assets/language/recipes/sr.json';
import engLang from '@/assets/language/recipes/eng.json';

export default {
  name: 'RecipesList',
  props: ["language"],
  computed: {
    dictionary: function () {
      console.log(this.$props.language)
      return this.$props.language === "english" ? engLang : rsLang;
    },
  },
};
</script>