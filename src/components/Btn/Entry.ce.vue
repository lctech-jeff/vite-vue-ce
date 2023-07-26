<script setup lang="ts">
import Btn from '@/components/Btn/index.vue'
import '@/assets/index.css'

const isPROD = ref(import.meta.env.PROD)
</script>

<template>
  <!-- 在 build 之後，將打包後的 style.css 引入 shadow dom。
  裡面包含了子組件的 style 和這個檔案引入的 assets/index.css -->
  <link v-if="isPROD" href="/dist/style.css" rel="stylesheet" />
  <Btn v-bind="$attrs">
    <template #text>
      <slot name="text"></slot>
    </template>
  </Btn>
</template>
