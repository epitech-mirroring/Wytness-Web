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
  @import url('https://fonts.googleapis.com/css2?family=Parkinsans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

  html {
    font-family: 'Parkinsans', serif;
  }

</style>
