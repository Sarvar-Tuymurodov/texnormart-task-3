<template>
  <div class="dialog" v-if="$store.state.productModule.productInfoDialog">
    <div class="dialog__content">
      <div class="dialog__left">
        <div class="dialog__left--img">
          <img :src="product.images[1]" alt="" />
        </div>
      </div>
      <div class="dialog__right">
        <h2 class="product__name">{{ product?.title }}</h2>
        <div class="product__rate">Rating: {{ product?.rating }}</div>
        <div class="product__discount-percentage">
          Discount: {{ product.discountPercentage }}%
        </div>
        <div class="product__discount">
          Early price: <span> {{ productFullPrice }}$</span>
        </div>
        <div class="product__price">Price: {{ product?.price }}$</div>
        <div class="product__detail">Detail information: {{ product?.description }}</div>
      </div>
      <div class="dialog__close" @click="$store.commit('SHOW_OR_CLOSE_FULL_INFO', false)">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {},
  },
  computed: {
    productFullPrice() {
      return Math.round(
        this.product?.price +
          (this.product?.price * this.product.discountPercentage) / 100
      );
    },
  },
};
</script>

<style scoped lang="scss">
.dialog__content {
  position: relative;
  display: flex;
  padding: 30px;
  max-width: 1100px;
}

.dialog__left {
  flex: 0 0 40%;
  margin-right: 20px;
}

.dialog__close {
  position: absolute;
  right: 15px;
  top: 15px;

  & span {
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: block;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 8px;
      width: 25px;
      height: 2px;
      border-radius: 6px;
      background-color: #696969;
      rotate: -45deg;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 8px;
      width: 25px;
      height: 2px;
      border-radius: 6px;
      background-color: #696969;
      rotate: 45deg;
    }
  }
}

.product__discount {
  & span {
    text-decoration: line-through;
  }
}
</style>
