<script setup lang="ts">
import Card from '@/components/ProductList/Card.vue'
import { useProductStorage } from '@/services/storageAdapter'

const productStore = useProductStorage()
</script>
<template>
  <div class="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
    <Card v-for="item in productStore.cookies" :key="item.id" :product="item" />
  </div>
</template>
<style scoped></style>
