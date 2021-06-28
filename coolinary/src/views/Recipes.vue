<template>
  <div class="recipes">
    <div class="gallery"
         v-for="photo in dictionary"
         :key="photo.id">
      <router-link :to="`/recipes/${photo.breadcrumb}`">
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
    margin: 4.5rem auto 0 auto;
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

    img {
      width: 100%;
      height: 30vw;
      object-fit: cover;
      border-radius: 0.75rem;
      transition: all 0.2s;

      &:hover {
        transition: all 0.2s;
        box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);;
      }
    }
  }

  .centered {
    position: absolute;
    padding: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: bold;
    font-size: xx-large;
  }
</style>