<template>
  <div class="person">
    <article class="blog-card">
      <img class="person-image" :src="_src" />
      <div class="article-details">
        <h4 class="person-name">
          {{ person.name }}
          <a target="_blank" class="aqua-link" :href="person.href">(Website)</a>
        </h4>
        <h3 class="person-description">{{ person.description }}</h3>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = !!window.localStorage.getItem("user");
  },
  props: ["person", "images"],
  components: {},
  computed: {
    _src: function () {
      const { person, images } = this.$props;
      return `data:image/png;base64, ${images[person.image]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

.aqua-link {
  color: var(--color-aqua);
  text-decoration: none;
}

.person {
  position: relative;
  max-width: 60rem;
  display: flex;
  flex-direction: row;
  background: $white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
}

.person-image {
  @include transition(opacity 0.3s ease);
  display: block;
  max-height: 240px;
  min-height: 240px;
  width: 320px;
  object-fit: cover;
}

.article-details {
  padding: 1.5rem;
}

.person-name {
  display: inline-block;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.person-description {
  @include transition(color 0.3s ease);
  font-size: 1.125rem;
  line-height: 1.4;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
}

.rating {
  font-size: 0.875rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid $border;
}

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    height: 27.25rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .person-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .person {
    max-width: 736px;
  }
}
</style>