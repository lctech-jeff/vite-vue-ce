<script setup lang="ts">
import { useOrdersStorage } from '@/services/storageAdapter'

defineProps<{ title: string }>()

const ordersStorage = useOrdersStorage()
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="grid gap-6">
      <div class="text-start" v-for="item in ordersStorage.orders" :key="item.created">
        <div>{{ new Date(item.created).toLocaleString() }}</div>
        <div>{{ item.cart.products.map(v => v.title).join(', ') }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
