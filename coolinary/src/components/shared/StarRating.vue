<template>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'StarRating',
  el: 'rating',
  components: {
    StarRating
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    }
  },
  computed: {
    currentRatingText() {
      return this.rating
        ? "You have selected " + this.rating + " stars"
        : "No rating selected";
    },
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    }
  },
  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: "No Rating",
      mouseOverRating: null
    };
  }
}

</script>