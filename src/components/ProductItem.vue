<template>
  <div class="product__card">
    <div class="product__card--img"><img :src="product.images[0]" /></div>
    <div class="product__card--content is-not-logged" v-if="!isLoggedIn">
      <div class="product__card--title">{{ product.title }}</div>
      <div class="product__card--subtitle">
        Batafsil bilish uchun
        <a
          class="product__card--subtitle-link"
          @click.prevent="$store.commit('SHOW_OR_CLOSE_MODAL', true)"
          >Tizimga kiring</a
        >
      </div>
    </div>
    <div class="product__card--content" v-else>
      <div class="product__card--title">
        Model: <strong>{{ product.title }}</strong>
      </div>
      <div class="product__card--rate">
        Rate: <strong>{{ product.rating }}</strong>
      </div>
      <div class="product__card--price">
        Price: <strong>{{ product.price }}$</strong>
      </div>
      <div class="product__card--subtitle">
        <p @click="$emit('showPro', product)" class="product__card--subtitle-link">
          Get detailed info
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
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
.products {
  &__title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  .product {
    &__card {
      display: flex;
      flex: 0 0 calc(20% - 30px);

      margin: 15px 15px;
      position: relative;
      overflow: hidden;
      min-height: 300px;
      border-radius: 10px;
      cursor: pointer;
      border: 2px solid #cecece;
      padding: 5px;
      transition: 0.2s;

      &:hover {
        border: 2px solid #4463ee;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      }

      &--img {
        & img {
          height: 100%;
          max-width: 100%;
        }
      }

      &--content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -100%;
        padding: 15px;
        background-color: #d9e0fe;
        transition: all 0.2s;
        border-radius: 10px;

        color: #3c4258;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      }

      &:hover .product__card--content {
        bottom: 0;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      }

      &--subtitle-link {
        color: #4463ee;
        font-weight: 600;

        &:hover {
          text-decoration: dotted !important;
        }
      }
    }
  }
}
</style>
