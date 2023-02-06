<template>
  <div class="products">
    <div class="container">
      <div class="products__body">
        <product-item
          v-for="product in $store.state.productModule.productsList"
          :product="product"
          :key="product.id"
          @showPro="showProductDetail"
        />
        <product-info :product="productData" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import ProductInfo from "./ProductInfo.vue";

export default {
  components: {
    ProductItem,
    ProductInfo,
  },
  data() {
    return {
      productData: null,
    };
  },
  methods: {
    showProductDetail(product) {
      this.productData = product;
      this.$store.commit("SHOW_OR_CLOSE_FULL_INFO", true);
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped lang="scss">
.products {
  &__body {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
