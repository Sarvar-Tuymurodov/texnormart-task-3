<template>
  <div
    class="dialog"
    v-if="$store.state.authModule.authModalShow"
    @click="$store.commit('SHOW_OR_CLOSE_MODAL', false)"
  >
    <div class="dialog__content" @click.stop>
      <form @submit.prevent="loginSystem">
        <h3 class="dialog__title">Authorization</h3>
        <div class="form__group">
          <label for="" class="form__label">Login</label>
          <input
            class="form__input"
            v-model.trim="login"
            name="login"
            required
            placeholder="Write login"
          />
        </div>
        <div class="form__group">
          <label for="" class="form__label">Password</label>
          <input
            class="form__input"
            v-model.trim="password"
            name="password"
            required
            placeholder="Write password"
          />
        </div>

        <div class="dialog__submit">
          <green-btn>Enter</green-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth-dialog",
  data() {
    return {
      login: "0lelplR",
      password: "kminchelle",
    };
  },
  methods: {
    loginSystem() {
      this.$store.dispatch("authorizationAction", {
        username: this.login,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss">
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background-color: white;
  min-height: 50px;
  border-radius: 12px;
  min-width: 300px;
  padding: 20px;
}

.dialog__title {
  margin-bottom: 20px;
}

.dialog__submit {
  display: flex;
  justify-content: center;
}

.form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form__label {
  margin-bottom: 8px;
  font-size: 16px;
}

.form__input {
  min-width: 400px;
  border: none;
  border-radius: 10px;
  border: 1px solid #cecece;
  padding: 15px 10px;

  &:focus {
    outline: none;
  }
}
</style>
