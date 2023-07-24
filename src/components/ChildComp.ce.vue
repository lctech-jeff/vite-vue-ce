<script setup lang="ts">
const name = ref('child component')
</script>

<template>
  <div class="flex-center mt-20px">This is {{ name }}</div>
</template>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
}
.mt-20px {
  margin-top: 20px;
}
</style>
