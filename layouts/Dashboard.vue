<script setup lang="ts">
  import DashboardNavBar from '@/components/DashboardNavBar.vue'
  import DashboardTopBar from '@/components/DashboardTopBar.vue'
  import { ref, onMounted } from 'vue'

  const workflowStore = useWorkflowStore();
  const authState = useAuthState();
  const serviceStore = useServiceStore();

  onMounted(() => {
    workflowStore.fetchWorkflows();
    serviceStore.fetchConnections();
  });

</script>

<template>
  <div class="flex h-screen w-screen">
    <DashboardNavBar />
    <div class="flex flex-col h-screen w-screen">
      <DashboardTopBar :add-logo="false"/>
      <main class="h-full w-full">
        <slot />
      </main>
    </div>
  </div>
</template>
