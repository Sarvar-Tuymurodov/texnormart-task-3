<template>
  <navbar></navbar>
  <product-list />
  <auth-dialog />
</template>

<script>
import "@/assets/css/main.css";
import Navbar from "@/components/Navbar.vue";
import ProductList from "@/components/ProductList.vue";
import AuthDialog from "@/components/AuthDialog.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ProductList,
    AuthDialog,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
};
</script>

<style></style>
