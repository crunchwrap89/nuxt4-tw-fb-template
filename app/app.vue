<template>
  <NuxtLayout name="default">
    <NuxtPwaManifest />
    <NuxtPage />
    <ClientOnly>
      <NuxtPwaUpdatePrompt />
    </ClientOnly>
  </NuxtLayout>
</template>
