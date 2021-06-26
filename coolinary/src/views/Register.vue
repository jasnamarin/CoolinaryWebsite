<template>
  <div class="register">
    <div class="register__container">
      <form v-on:submit.prevent="onSubmit" class="register__form">
        <h2>{{ dictionary.header }}</h2>
        <Label for="firstName" :text="dictionary.firstName" />
        <Input v-model="firstName" type="text" />
        <Label for="lastName" :text="dictionary.lastName" />
        <Input v-model="lastName" type="text" />
        <Label for="username" :text="dictionary.username" />
        <Input v-model="username" type="text" />
        <Label for="email" :text="dictionary.email" />
        <Input v-model="email" type="email" />
        <Label for="password" :text="dictionary.password" />
        <Input v-model="password" type="password" />
        <Label
          for="passwordConfirmation"
          :text="dictionary.passwordConfirmation"
        />
        <Input v-model="passwordConfirmation" type="password" />
        <AlertBox v-if="error !== ''" :text="_error" />
        <Button type="submit" :text="dictionary.signIn" />
        {{ dictionary.hasAccount }}&nbsp;<router-link class="link" to="/login"
          >{{ dictionary.here }}.</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail, getUsers } from "@/utils";

import englishDict from "@/assets/language/register/eng.json";
import serbianDict from "@/assets/language/register/sr.json";

import errorEnglishDict from "@/assets/language/errors/eng.json";
import errorSerbianDict from "@/assets/language/errors/sr.json";

import Input from "@/components/shared/Input.vue";
import Label from "@/components/shared/Label.vue";
import Button from "@/components/shared/Button.vue";
import AlertBox from "@/components/shared/AlertBox.vue";

export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      passwordConfirmation: "",
      error: "",
    };
  },
  components: {
    Input,
    Label,
    Button,
    AlertBox,
  },
  props: ["language", "refreshApp"],
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

      const {
        firstName,
        lastName,
        username,
        password,
        email,
        passwordConfirmation,
      } = this;

      if (firstName === "") {
        this.error = "errorInvalidFirstName";
        return;
      }

      if (lastName === "") {
        this.error = "errorInvalidLastName";
        return;
      }

      if (username === "") {
        this.error = "errorInvalidUsername";
        return;
      }

      if (!validateEmail(email)) {
        this.error = "errorInvalidEmail";
        return;
      }

      if (password === "") {
        this.error = "errorInvalidPassword";
        return;
      }

      if (passwordConfirmation !== password) {
        this.error = "errorPasswordMismatch";
        return;
      }

      const users = getUsers();
      const emailTaken = users.some((u) => u.email === email);
      if (emailTaken) {
        this.error = "errorEmailTaken";
        return;
      }

      const usernameTaken = users.some((u) => u.username === username);
      if (usernameTaken) {
        this.error = "errorUsernameTaken";
        return;
      }

      const user = {
        username,
        password,
        email,
        firstName,
        lastName,
      };

      const newUsers = [...users, user]

      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("users", JSON.stringify(newUsers));

      this.$props.refreshApp();

      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
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
    min-width: 380px;
  }

  Button {
    height: 3rem;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
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
  .register {
    &__container {
      padding-top: 20px;
    }
  }
}
</style>
