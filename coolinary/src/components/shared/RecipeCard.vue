<template>
  <div class="card">
      <img src="src\assets\logo.png" alt="">
      <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  padding: 0.5rem 1rem;
  border: 2px solid gray;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 16px;
  color: #fff;
  background: gray;
  box-shadow: none;
  text-align: center;

  &:hover {
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 5px gray;
    outline: none;
  }
}
</style>