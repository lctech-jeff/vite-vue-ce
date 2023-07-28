<script setup lang="ts">
import Btn from '@/components/Btn/Entry.ce.vue'
import type { Product } from '@/domain/product'
import { hasAllergy, hasPreference } from '@/domain/user'
import { useAddToCart } from '@/application/addToCart'
import { useUserStorage } from '@/services/storageAdapter'

const props = defineProps<{ product: Product }>()

const userStore = useUserStorage()
const user = computed(() => userStore.user)

const { addToCart } = useAddToCart()

const productHasPreference = computed(() => props.product.toppings.some(v => hasPreference(user.value, v)))
const productHasAllergy = computed(() => props.product.toppings.some(v => hasAllergy(user.value, v)))
const iconAfterTitle = computed(() => {
  if (productHasAllergy.value) return '⚠️'
  if (productHasPreference.value) return '👍'
  return ''
})
</script>
<template>
  <div>
    <div class="w-full">
      <img
        class="aspect-video w-full object-cover"
        :src="`https://fakeimg.pl/350x200/?text=${product.title}`"
        loading="lazy"
        :alt="product.title"
      />
    </div>
    <div class="flex justify-between py-2">
      <div class="text-start">
        <div>{{ product.title }}&nbsp;{{ iconAfterTitle }}</div>
        <div>{{ product.price }}</div>
      </div>
      <Btn @click="addToCart(userStore.user, product)">加入購物車</Btn>
    </div>
  </div>
</template>
<style scoped></style>
