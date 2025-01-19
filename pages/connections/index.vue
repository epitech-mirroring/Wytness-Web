<script setup lang="ts">
  import ServiceCard from '~/components/ui/ServiceCard.vue';
  import { onMounted } from 'vue';

  definePageMeta({
    title: "Connections",
    description: "Page to manage connections with services",
    middleware: ["auth"],
    layout: "dashboard",
  });

  const serviceStore = useServiceStore();

  onMounted(async () => {
    await serviceStore.fetchConnections();
  });
</script>

<template>
  <div class="flex flex-wrap gap-5 p-5">
    <ServiceCard
      v-for="connection in serviceStore.connections"
      :key="connection.serviceId"
      :name="serviceStore.getServiceWithId(connection.serviceId)?.name || 'Service'"
      :logo="serviceStore.getServiceWithId(connection.serviceId)?.logo || 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'"
      :bgColor="serviceStore.getServiceWithId(connection.serviceId)?.color || '#1CD760'"
      :connected="connection.connected"
      :serviceId="connection.serviceId"
    ></ServiceCard>
  </div>
</template>

<style scoped></style>
