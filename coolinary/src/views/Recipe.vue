<template>
  <div class="recipe">{{ recipe.name }} {{ recipe.id }}</div>
</template>

<script>
import { getRecipesForLanguage } from '@/utils'

export default {
  name: 'Recipe',
  props: ['language'],
  data() {
    return {
      recipe: {},
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.id, 10);
    const recipes = getRecipesForLanguage(this.$props.language)

    this.recipe = recipes.find(recipe => recipe.id === id) ?? {};
  }
}
</script>

<style lang="scss" scoped>
.recipe {
  margin-top: 7rem;
}
</style>