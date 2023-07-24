<!-- 為了方便開發，開發時會以Vue component的方式載入。 -->

<script setup lang="ts">
import CheckoutBtn from '@/components/CheckoutBtn/Entry.ce.vue'
import CheckoutPanel from '@/components/CheckoutPanel/Entry.ce.vue'
</script>

<template>
  <CheckoutBtn />
  <CheckoutPanel />
</template>
