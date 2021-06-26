<template>
  <div class="alert-box">{{ text }}</div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: ['text'],
}
</script>

<style lang="scss" scoped>
div {
  padding: 1rem;
  font-size: 16px;
  color: #fff;
  background: var(--color-red);
}
</style>