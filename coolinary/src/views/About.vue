<template>
  <div class="about">
    <div class="about__bannerContainer">
      <div class="about__banner">
        <h1>About Us</h1>
      </div>
    </div>
    <div class="about__mainSection">
      <h2>Coolinary Recipes</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>
    </div>
    <div class="about__awards">
      <div class="about__awards--header"><strong>Coolinary Recipes has been awarded with some of the most prestigious awards:</strong></div>
      <div class="about__awards--award">
        <img src="@/assets/images/web_avards_logo.png" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates reiciendis, a ad mollitia rerum, impedit exercitationem harum illum iure quidem cum! Ducimus, dignissimos iusto animi quas corporis molestias debitis.</p>
    </div>
    <div class="map-outerContainer">
      <Map />
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'About',
  components: {
    Map,
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  padding-top: 7rem;
  padding-bottom: 7rem;
  overflow-y: auto;

  &__bannerContainer {
    background-image: url("../assets/images/about_us_background.jpg");
    background-size: cover;
  }

  &__banner {
    display: flex;
    align-items: center;
    color: #fff;
    height: 120px;
    text-align: left;
    padding-left: 4rem;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__awards {
    margin-top: 3rem;

    &--header {
      margin-bottom: 1rem;
    }

    &--award {
      display: flex;
      align-items: center;

      img {
        margin-right: 1rem;
        width: 150px;
        height: 100px;
      }
    }
  }

  &__mainSection, &__awards {
    padding: 0 20%;
    text-align: left;

    h2 {
      font-weight: 600;
      margin-bottom: 0;
      margin-top: 2rem;
    }

    hr {
      margin-top: 1rem;
    }

    p {
      text-align: justify;
      font-size: 18px;
    }
  }
}

.map-outerContainer {
  height: 500px;
  overflow: auto;
  padding: 0 20%;
}

@media only screen and (max-width: 1024px) {
  .about {
    .map-outerContainer {
      padding: 0 5%;
    }

    &__mainSection, &__awards { 
      padding: 0 5%;
    }
  }
}
</style>
