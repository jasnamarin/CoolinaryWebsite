<template>
  <div class="share-recipe">
    <div class="share__container">
      <form v-on:submit.prevent="onSubmit" class="share__form">
        <h2>{{ dictionary.header }}</h2>
        <hr />
        <div class="share__form--label"><strong>Name</strong></div>
        <Input v-model="name" />
        <div class="share__form--label"><strong>Choose category</strong></div>
        <select class="share__form--select" v-model="type">
          <option value="">Select option</option>
          <option value="main-dishes">Main Dishes</option>
          <option value="appetizers">Appetizers</option>
          <option value="snacks">Snacks</option>
          <option value="desserts">Desserts</option>
        </select>
        <div class="share__form--label">
          <strong
            >Ingredients (<span
              :class="ingredients.length === 1 ? 'disabled' : ''"
              class="share__form--minus"
              @click="removeIngredient"
              >remove</span
            >
            /
            <span class="share__form--plus" @click="addIngredient">add</span
            >)</strong
          >
        </div>
        <Input
          :key="index"
          v-for="(ingredient, index) in ingredients"
          v-model="ingredients[index]"
        />
        <div class="share__form--label"><strong>Instructions</strong></div>
        <Textarea v-model="instructions" />
        <div class="share__form--label"><strong>Difficulty</strong></div>
        <star-rating
          :show-rating="false"
          :rating="level"
          @update:rating="updateLevel"
        ></star-rating>
        <div class="share__form--label"><strong>Estimated time</strong></div>
        <Input v-model="time" />
        <div class="share__form--label">
          <strong>Upload images</strong> (<input
            ref="fileUpload"
            type="file"
            style="display: none"
            multiple
            @change="filesChange($event.target.files)"
            accept="image/*"
            class="input-file"
          /><span class="aqua" @click="chooseImage">choose</span>)
        </div>
        <div class="share__form--imageContainer">
          <img
            class="share__form--image"
            :key="image"
            v-for="image in photo"
            :src="`data:image/png;base64, ${images[image]}`"
          />
        </div>
        <AlertBox v-if="error !== ''" :text="_error" />
        <hr />
        <Button type="submit" :text="dictionary.submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { saveRecipeForType } from "@/utils"
import StarRating from "vue-star-rating";

import englishDict from "@/assets/language/shareRecipe/eng.json";
import serbianDict from "@/assets/language/shareRecipe/sr.json";

import errorEnglishDict from "@/assets/language/errors/eng.json";
import errorSerbianDict from "@/assets/language/errors/sr.json";

import Button from "@/components/shared/Button.vue";
import Input from "@/components/shared/Input.vue";
import Textarea from "@/components/shared/Textarea.vue";
import AlertBox from "@/components/shared/AlertBox.vue";

export default {
  name: "ShareRecipe",
  components: {
    Button,
    Input,
    Textarea,
    AlertBox,
    StarRating,
  },
  data() {
    return {
      name: "",
      instructions: "",
      ingredients: [""],
      level: 0,
      time: "",
      error: "",
      type: "",
      photo: [],
    };
  },
  props: ["language", "refreshApp", "images"],
  computed: {
    dictionary: function () {
      return this.$props.language === "english" ? englishDict : serbianDict;
    },
    _error: function () {
      const errorDictionary =
        this.$props.language === "english"
          ? errorEnglishDict
          : errorSerbianDict;

      return errorDictionary[this.error] ?? "";
    },
  },
  methods: {
    onSubmit: function () {
      this.error = "";
      const { instructions, name, ingredients, level, type, photo, time } = this;

      if (name === "") {
        this.error = "errorInvalidName";
        return;
      }

      if (type === "") {
        this.error = "errorInvalidType";
        return;
      }

      if (ingredients.some((i) => i === "")) {
        this.error = "errorInvalidIngredients";
        return;
      }

      if (instructions === "") {
        this.error = "errorInvalidInstructions";
        return;
      }

      if (level === 0) {
        this.error = "errorInvalidDifficulty";
        return;
      }

      if (time === '') {
        this.error = "errorInvalidTime";
        return;
      }

      if (photo.length === 0) {
        this.error = "errorInvalidPhotos";
        return;
      }

      const recipe = { name, type, ingredients, instructions, level, time, photo }

      const { id } = saveRecipeForType(recipe);
      this.$router.push(`/recipes/recipe/${id}`);
    },
    filesChange(files) {
      const promises = Array.from(files).map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = () => {
              resolve({ name: file.name, data: btoa(reader.result) });
            };

            reader.readAsBinaryString(file);
          })
      );

      Promise.all(promises).then((files) => {
        this.$emit(
          "updateImages",
          files.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.data }), {})
        );
        this.photo = files.map((file) => file.name);
      });
    },
    chooseImage() {
      this.$refs.fileUpload.click();
    },
    updateLevel(newValue) {
      this.level = newValue;
    },
    removeIngredient() {
      if (this.ingredients.length === 1) {
        return;
      }

      this.ingredients = this.ingredients.slice(0, -1);
    },
    addIngredient() {
      this.ingredients = [...this.ingredients, ""];
    },
  },
};
</script>

<style lang="scss" scoped>
.share-recipe {
  margin: 200px;
  padding-bottom: 5rem;
  padding-top: 7rem;
  background-size: cover;
  height: 100%;
  text-align: left;
  overflow-y: auto;

  Input {
    width: 100%;
    max-width: 450px;
    line-height: 2;
    resize: none;
    margin-bottom: 24px;

    &:focus {
      transition: box-shadow 0.3s;
      box-shadow: 0 0 5px gray;
      border: 1px solid gray;
      outline: none;
    }
  }

  .aqua {
    font-size: 16px;
    color: var(--color-aqua);
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    margin-top: 0;
  }

  Button {
    margin-bottom: 16px;
    min-width: 360px;
    height: 3rem;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    margin-left: 120px;
  }

  &__form {
    margin: 200px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.9);
    padding: 3rem;
  }

  .share__form--label {
    margin-bottom: 12px;
    user-select: none;
  }

  .share__form--imageContainer {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 900px;
    overflow-x: auto;
  }

  .share__form--image {
    object-fit: cover;
    width: 100%;
    height: 160px;
    margin-right: 16px;
    margin-bottom: 16px;
    border-radius: 0.75rem;
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s;
      box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    }
  }

  .share__form--select {
    padding: 0.5rem 0.6rem;
    width: 100%;
    max-width: 450px;
    line-height: 2;
    resize: none;
    margin-bottom: 24px;
    border: 1px solid var(--color-primary);
    transition: all 0.3s;
    font-size: 16px;
    color: var(--color-primary);

    &:focus {
      transition: box-shadow 0.3s;
      transition: border 0.3s;
      box-shadow: 0 0 5px gray;
      border: 1px solid gray;
      outline: none;
    }
  }

  .share__form--minus {
    color: var(--color-red);

    &:hover {
      cursor: pointer;
    }
  }

  .share__form--plus {
    color: var(--color-green);

    &:hover {
      cursor: pointer;
    }
  }

  .alert-box {
    width: 100%;
    max-width: 450px;
  }

  .disabled {
    cursor: not-allowed;

    &:hover {
      cursor: not-allowed;
    }
  }

  Textarea {
    width: 100%;
    max-width: 450px;
    height: 8rem;
    line-height: 2;
    resize: none;
    margin-bottom: 24px;

    &:focus {
      transition: box-shadow 0.3s;
      transition: border 0.3s;
      box-shadow: 0 0 5px gray;
      border: 1px solid gray;
      outline: none;
    }
  }

  .vue-star-rating {
    margin-bottom: 24px;
  }
}
</style>