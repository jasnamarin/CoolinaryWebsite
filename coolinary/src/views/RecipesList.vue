<template>
  <div class="recipes_list">
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

<style scoped>

    .recipes_list {
        margin: 7rem auto;
        width: 100vw;
        height: 100wh;
    }

</style>