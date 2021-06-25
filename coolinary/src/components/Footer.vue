<template>
    <footer class="footer">
      Copyright 2021, Marko Vitiz, Jasna Marin, Odsek za softversko inzenjerstvo
      Elektrotehnickog fakulteta Univerziteta u Beogradu
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  padding: 4px;
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--color-gray);
}
</style>