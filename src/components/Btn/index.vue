<script setup lang="ts"></script>
<template>
  <div>
    <button
      type="button"
      class="cursor-pointer rounded-lg border border-transparent bg-[var(--bg-color)] px-5 py-2.5 font-medium transition-[border-color] duration-[0.25s] hover:border-[#646cff]"
    >
      <slot name="text"></slot>
    </button>
  </div>
</template>

<style scoped>
button {
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
