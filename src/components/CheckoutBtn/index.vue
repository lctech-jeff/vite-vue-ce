<script setup lang="ts">
import { useUserStorage, useCartStorage } from '@/services/storageAdapter'
import { useOrderProducts } from '@/application/orderProducts'

defineProps<{ text: string }>()

const userStore = useUserStorage()
const cartStorage = useCartStorage()
const { orderProducts } = useOrderProducts()

const handleCheckout = async () => {
  if (!userStore.user?.id) return window.alert('請先登入！')
  await orderProducts(userStore?.user, cartStorage.cart)
}
</script>
<template>
  <div>
    <button type="button" @click="handleCheckout">{{ text }}</button>
  </div>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: var(--bg-color);
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
