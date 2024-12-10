<script setup lang="ts">
const serviceStore = useServiceStore();

onMounted(() => {
  serviceStore.fetchConnections();
});

definePageMeta({
  title: "Dashboard - Connections",
  description: "Dashboard OAuth connections",
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1>Connections</h1>
    <div>
      <div
        v-for="connection in serviceStore.connections"
        :key="connection.serviceId"
        class="flex gap-2 items-center"
      >
        <span class="font-semibold capitalize">
          {{ serviceStore.getServiceWithId(connection.serviceId)?.name }}
        </span>
        <div
          :class="{
            'text-green-500': connection.connected,
            'text-red-500': !connection.connected,
          }"
        >
          {{ connection.connected ? "Connected" : "Not connected" }}
        </div>
        <Button
          v-if="!connection.connected"
          @click="serviceStore.connectService(connection.serviceId)"
        >
          Connect
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
