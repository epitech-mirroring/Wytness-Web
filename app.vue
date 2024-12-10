<script setup lang="ts">
const serviceStore = useServiceStore();

const authState = useAuthState();

onMounted(() => {
  serviceStore.fetchServices();
});
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<style>
@import "~/assets/css/tailwind.css";
</style>
