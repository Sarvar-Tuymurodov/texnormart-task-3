<template>
  <button class="btn-blue">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "primary-btn",
};
</script>

<style scoped>
.btn-blue {
  border: none;
  padding: 12px 24px;
  transition: all 0.2s;
  background-color: #4463ee;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.btn-blue:hover {
  background-color: #4362ee;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
