<script setup lang="tsx">
const TsxComp = (
  <>
    <div class="flex-center mt-20px">
      <span>Render By Tsx</span>
    </div>
  </>
)
</script>

<template>
  <TsxComp />
</template>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
}
.mt-20px {
  margin-top: 20px;
}
</style>
