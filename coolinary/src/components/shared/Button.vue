<template>
  <button :type="_type">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type', 'text'],
  computed: {
    _type: function() {
      return this.$props.type ?? 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 16px;
  color: #fff;
  background: var(--color-green);
  box-shadow: none;
  text-align: center;

  &:hover {
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 5px var(--color-green);
    outline: none;
  }
}
</style>