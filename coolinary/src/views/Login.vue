<template>
  <div class="login">
    <div class="login__container">
      <form v-on:submit.prevent="onSubmit" class="login__form">
        <h2>{{ dictionary.header }}</h2>
        <Label for="username" :text="dictionary.username" />
        <Input v-model="username" type="text" />
        <Label for="password" :text="dictionary.password" />
        <Input v-model="password" type="password" />
        <AlertBox v-if="error !== ''" :text="_error" />
        <Button type="submit" :text="dictionary.signIn" />
        {{ dictionary.noAccount }}&nbsp;<router-link class="link" to="/register"
          >{{ dictionary.here }}.</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/utils/index.js";

import englishDict from "@/assets/language/login/eng.json";
import serbianDict from "@/assets/language/login/sr.json";

import errorEnglishDict from "@/assets/language/errors/eng.json";
import errorSerbianDict from "@/assets/language/errors/sr.json";

import Input from "@/components/shared/Input.vue";
import Label from "@/components/shared/Label.vue";
import Button from "@/components/shared/Button.vue";
import AlertBox from "@/components/shared/AlertBox.vue";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  components: {
    Input,
    Label,
    Button,
    AlertBox,
  },
  props: ["language"],
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

      const { username, password } = this;
      if (username === "") {
        this.error = "errorInvalidUsername";
        return;
      }

      if (password === "") {
        this.error = "errorInvalidPassword";
        return;
      }

      const users = getUsers();
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (!user) {
        this.error = "errorInvalidCredentials";
        return;
      }

      window.localStorage.setItem("user", JSON.stringify(user));

      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-bottom: 5rem;
  padding-top: 7rem;
  background-image: url("../assets/images/login_background.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  text-align: left;
  overflow-y: auto;

  h2 {
    margin-top: 0;
  }

  Input,
  .alert-box,
  Button {
    margin-bottom: 16px;
    min-width: 360px;
  }

  Button {
    height: 3rem;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    padding-top: 120px;
  }

  &__form {
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.9);
    padding: 3rem;
  }

  .link {
    color: var(--color-blue);
  }
}

@media only screen and (max-width: 1024px) {
  .login {
    &__container {
      padding-top: 60px;
    }
  }
}
</style>
