<script setup lang="ts">
import type { Product } from '@/domain/product'
import { useAddToCart } from '@/application/addToCart'
import { useUserStore } from '@/services/store'

defineProps<{ product: Product }>()

const userStore = useUserStore()

const { addToCart } = useAddToCart()
</script>
<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="`https://fakeimg.pl/350x200/?text=${product.title}`" />
    </div>
    <div class="product-card__footer">
      <div class="product-card__footer__detail">
        <div>{{ product.title }}</div>
        <div>{{ product.price }}</div>
      </div>
      <button type="button" @click="addToCart(userStore.user, product)">Add to cart</button>
    </div>
  </div>
</template>
<style scoped>
.product-card {
  .product-card__image {
    width: 100%;
    > img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  }
  .product-card__footer {
    display: flex;
    justify-content: space-between;
    .product-card__footer__detail {
      text-align: start;
    }
  }
}
</style>
