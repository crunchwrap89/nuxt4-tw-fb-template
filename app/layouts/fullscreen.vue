<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'overscroll-none',
  },
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <div class="overscroll-none fixed h-screen max-h-screen w-full">
    <!--    <TheNavbar /> -->
    <slot />
  </div>
</template>
