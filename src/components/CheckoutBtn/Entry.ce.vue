<script setup lang="ts">
import CheckoutBtn from '@/components/CheckoutBtn/index.vue'
import '@/assets/index.css'

const isPROD = ref(import.meta.env.PROD)
const emit = defineEmits(['checkout-success', 'checkout-failure'])

defineOptions({
  name: 'CheckoutBtn',
})
</script>

<template>
  <!-- 在 build 之後，將打包後的 style.css 引入 shadow dom。
  裡面包含了子組件的 style 和這個檔案引入的 assets/index.css -->
  <link v-if="isPROD" href="/dist/style.css" rel="stylesheet" />

  <CheckoutBtn
    v-bind="$attrs"
    text="結帳按鈕"
    @checkout-success="emit('checkout-success', $event)"
    @checkout-failure="emit('checkout-failure', $event)"
  />
</template>
