<template>
  <label :for="labelFor">{{ text }}</label>
</template>

<script>
export default {
  name: 'Label',
  props: ['for', 'text'],
  computed: {
    labelFor: function() {
      return this.$props.for
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 16px;
  color: var(--color-primary);
}
</style>