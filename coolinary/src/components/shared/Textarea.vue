<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="_placeholder" />
</template>

<script>
export default {
  name: 'Textarea',
  props: ['placeholder', 'modelValue'],
  computed: {
    _placeholder: function() {
      return this.$props.placeholder ?? ''
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  display: block;
  padding: 0.5rem 0.6rem;
  border: 1px solid var(--color-primary);
  transition: box-shadow 0.3s;
  transition: border 0.3s;
  font-size: 16px;
  color: var(--color-primary);

  &:focus {
    transition: box-shadow 0.3s;
    transition: border 0.3s;
    box-shadow: 0 0 5px var(--color-green);
    border: 1px solid var(--color-green);
    outline: none;
  }
}
</style>