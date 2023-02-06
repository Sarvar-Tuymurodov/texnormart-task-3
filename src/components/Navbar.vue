<template>
  <div class="nav">
    <div class="container">
      <div class="nav__body">
        <div class="nav__brand">
          <h3>Online shop</h3>
        </div>
        <div v-if="!isLoggedIn" class="nav__actions">
          <primary-btn @click="$store.commit('SHOW_OR_CLOSE_MODAL', true)"
            >Login</primary-btn
          >
        </div>
        <div v-else class="nav__user">
          <div class="nav__user--logo"><img :src="currentUser?.image" alt="" /></div>
          <div class="nav__user--name">{{ currentUser?.firstName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  methods: {},
  computed: {
    ...mapState({
      currentUser: (state) => state.authModule.userData,
      isLoggedIn: (state) => state.authModule.isLoggedIn,
    }),
  },
};
</script>

<style scoped lang="scss">
.nav {
  padding: 15px 0;
}

.nav__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__user {
  display: flex;
  flex-direction: column;

  justify-content: center;

  &--logo {
    align-self: center;
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 50%;
    background-color: #c9c9c9;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &--name {
    font-weight: bold;
    text-align: center;
  }
}
</style>
