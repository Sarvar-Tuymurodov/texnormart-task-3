<template>
  <button class="btn-green">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "green-btn",
};
</script>

<style scoped>
.btn-green {
  border: none;
  padding: 12px 24px;
  transition: all 0.2s;
  background-color: #85ee44;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.btn-green:hover {
  background-color: #85ee43;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
