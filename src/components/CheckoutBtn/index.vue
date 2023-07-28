<script setup lang="ts">
import Btn from '@/components/Btn/Entry.ce.vue'
import { useUserStorage, useCartStorage } from '@/services/storageAdapter'
import { useOrderProducts } from '@/application/orderProducts'
import { User } from '@/domain/user'
import { Cart } from '@/domain/cart'

defineProps<{ text: string }>()

const userStore = useUserStorage()
const cartStorage = useCartStorage()
const { orderProducts } = useOrderProducts()

const handleCheckout = async () => {
  if (!userStore.user?.id) return window.alert('請先登入！')
  try {
    const isSuccess = await orderProducts(userStore?.user, cartStorage.cart)
    if (!isSuccess) throw new Error()
    emit('checkout-success', {
      status: 'success',
      user: userStore?.user,
      cart: cartStorage.cart,
    })
  } catch (e) {
    console.log(e)
    emit('checkout-failure', {
      status: 'failure',
    })
  }
}

type CheckoutStatus = 'success' | 'failure'

const emit = defineEmits<{
  'checkout-success': [{ status: CheckoutStatus; user: User; cart: Cart }]
  'checkout-failure': [{ status: CheckoutStatus }]
}>()
</script>
<template>
  <div>
    <Btn @click="handleCheckout">{{ text }}&nbsp;({{ cartStorage.cart?.products.length }})</Btn>
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
