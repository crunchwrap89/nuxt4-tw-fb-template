<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const router = useRouter();

function goBack() {
  const allRoutes = router.options.routes;
  if (Array.isArray(allRoutes) && allRoutes.some(route => route.path === router.currentRoute.value.path)) {
    clearError();
  }
  else {
    router.push('/');
    clearError();
  }
}
</script>

<template>
  <NuxtLayout name="fullscreen">
    <div class="w-full h-screen text-base text-white/90 flex justify-center items-center">
      <div class="flex flex-col items-center justify-center text-center p-10">
        <h1 class="font-bold text-2xl mt-5 text-white/90 dark:text-white/90">
          Error - {{ props.error?.statusCode }}
        </h1>
        <div class="w-62.5 sm:w-112.5 wrap-break-word">
          <p class="text-lg text-white/90 dark:text-white/90">
            {{ props.error?.statusMessage }}.
            {{ props.error?.cause }}
            {{ props.error?.message }}
          </p>
        </div>
        <div
          class="rounded-full px-5 py-3 text-sm font-bold text-white/90 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
          @click="goBack"
        >
          Go back
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
