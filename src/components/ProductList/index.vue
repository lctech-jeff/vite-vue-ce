<script setup lang="ts">
import Card from '@/components/ProductList/Card.vue'
import { useProductStore } from '@/services/store'

const productStore = useProductStore()
</script>
<template>
  <div class="product-list">
    <Card v-for="item in productStore.cookies" :key="item.id" :product="item" />
  </div>
</template>
<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 36px;
}
</style>
