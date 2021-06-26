<template>
  <div class="recipes">
    <div class="gallery"
         v-for="photo in dictionary"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
        <div class="centered">{{photo.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import rsThumbnails from '@/assets/language/thumbnails/sr.json';
import engThumbnails from '@/assets/language/thumbnails/eng.json';

export default {
  name: 'Recipes',
  props: ["language"],
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },computed: {
    dictionary: function () {
      console.log(this.$props.language)
      return this.$props.language === "english" ? engThumbnails : rsThumbnails;
    },
  },
};
</script>

<style lang="scss" scoped>
  .recipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    max-width: 100rem;
    margin: 5rem auto;
    padding: 7rem 5rem;

    $small: 900px;
    $medium: 1600px;

    @media screen and (max-width: $small) {
      grid-template-columns: 1fr;
      margin: 1rem auto;
    }

    @media screen and (min-width: $small) and (max-width: $medium) {
      grid-template-columns: 1fr 1fr;
      margin: 1rem auto;
    }
  }

  .gallery {
    position: relative;
  }

  .gallery img {
    width: 100%;
    height: 30vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: bold;
    font-size: xx-large;
  }
</style>