<script setup lang="ts">
definePageMeta({
  title: "Dashboard",
  description: "Dashboard",
  middleware: ["auth"],
});

const backend = useBackend();

onMounted(() => {
  backend.authFetch("/users/me");
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<style scoped></style>
