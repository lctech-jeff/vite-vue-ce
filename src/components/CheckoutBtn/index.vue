<script setup lang="ts">
import Btn from '@/components/Btn/Entry.ce.vue'
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
    <Btn @click="handleCheckout">
      <template #text>
        <div>{{ text }}&nbsp;({{ cartStorage.cart?.products.length }})</div>
      </template>
    </Btn>
  </div>
</template>

<style scoped>
:deep(button) {
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
