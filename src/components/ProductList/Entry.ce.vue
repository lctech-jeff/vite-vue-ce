<script setup lang="ts">
import ProductList from '@/components/ProductList/index.vue'
import '@/assets/index.css'

const isPROD = ref(import.meta.env.PROD)

defineOptions({
  name: 'ProductList',
})
</script>

<template>
  <!-- 在 build 之後，將打包後的 style.css 引入 shadow dom。
  裡面包含了子組件的 style 和這個檔案引入的 assets/index.css -->
  <link v-if="isPROD" href="/dist/style.css" rel="stylesheet" />

  <ProductList v-bind="$attrs" />
</template>
