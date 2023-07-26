<script setup lang="ts">
import Btn from '@/components/Btn/Entry.ce.vue'
import type { Product } from '@/domain/product'
import { hasAllergy, hasPreference } from '@/domain/user'
import { useAddToCart } from '@/application/addToCart'
import { useUserStore } from '@/services/store'

const props = defineProps<{ product: Product }>()

const userStore = useUserStore()

const { addToCart } = useAddToCart()

const productHasPreference = computed(() => props.product.toppings.some(v => hasPreference(userStore.user, v)))
const productHasAllergy = computed(() => props.product.toppings.some(v => hasAllergy(userStore.user, v)))
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
      <Btn @click="addToCart(userStore.user, product)">
        <template #text>
          <div>加入購物車</div>
        </template>
      </Btn>
    </div>
  </div>
</template>
<style scoped></style>
