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

  html {
    font-family: 'Parkinsans', serif;
  }

</style>
