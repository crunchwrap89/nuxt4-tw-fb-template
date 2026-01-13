<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <main
    class="relative w-full"
  >
    <!--    <TheNavBar /> -->
    <slot />
  </main>
</template>
