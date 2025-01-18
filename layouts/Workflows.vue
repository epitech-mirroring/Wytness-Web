<script setup lang="ts">
  import DashboardNavBar from '@/components/DashboardNavBar.vue'
  import DashboardTopBar from '@/components/DashboardTopBar.vue'
  import { ref, onMounted } from 'vue'

  onMounted(() => {
  });

</script>

<template>
    <div class="flex flex-col h-screen w-screen">
      <DashboardTopBar :add-logo="true" class="fixed"/>
      <main class="h-full w-full">
        <slot />
      </main>
    </div>
</template>
