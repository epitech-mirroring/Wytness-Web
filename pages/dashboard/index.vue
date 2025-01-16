<script setup lang="ts">
  import AreaChart from '@/components/ui/chart-area/AreaChart.vue';
  import Progress from '@/components/ui/progress/Progress.vue';
  import { ref, onMounted } from 'vue';
  import WorkflowCard from '~/components/ui/WorkflowCard.vue';

  definePageMeta({
    title: "Dashboard",
    description: "Dashboard page",
    middleware: ["auth"],
    layout: "dashboard",
  });

  const workflowStore = useWorkflowStore();
  const serviceStore = useServiceStore();
  const router = useRouter();
  const statisticStore = useStatisticStore();
  const maxDataUpload = ref(1000);
  const maxDataDownload = ref(1000);
  const userDataUpload = ref(100);
  const userDataDownload = ref(100);
  const recentWorkflows = ref<any[]>([]);

  onMounted( async () => {
    await statisticStore.fetchUserStatistic();
    userDataDownload.value = await statisticStore.getUserDownloadedDatainMo();
    userDataUpload.value = await statisticStore.getUserUploadedDatainMo();
    maxDataDownload.value = getMaxData(userDataDownload.value);
    maxDataUpload.value = getMaxData(userDataUpload.value);
    recentWorkflows.value = await workflowStore.fetchRecentWorkflows(5);
  });

  const getMaxData = (consumedData: number) => {
    const consumedDataMo = consumedData / 1000 / 1000;
    if (consumedDataMo < 10) {
      return 10;
    } else if (consumedDataMo < 50) {
      return 50;
    } else if (consumedDataMo < 100) {
      return 100;
    } else if (consumedDataMo < 500) {
      return 500;
    } else {
      return 1000;
    }
  }
</script>

<template>
  <div class="w-full h-full flex flex-col items-start justify-start p-5 gap-5">
    <div class="flex flex-wrap w-full justify-between gap-1.5">
      <div class="flex items-center justify-center flex-col p-5 border border-navabar-border rounded-xl shadow-md min-w-56 max-[945px]:hidden">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ statisticStore.userStatistic.successfulExecutions }}</span>

          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Succesful run</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-1.5">
        <div class="flex items-center justify-center flex-col p-4 border border-navabar-border rounded-xl shadow-md">
          <div class="flex flex-col gap-5">
            <span class="font-bold self-center">Data used ↓ (Mb)</span>
            <div class="flex flex-col">
              <span class="text-xxs	text-text-muted self-end">{{ userDataDownload }}/{{ maxDataDownload }} (~{{ Math.round(userDataDownload / maxDataDownload * 100) }}%)</span>
              <Progress :model-value="Math.round(userDataDownload / maxDataDownload * 100)" class="w-96" bar-Color="#E76E50"></Progress>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center flex-col p-4 border border-navabar-border rounded-xl shadow-md">
          <div class="flex flex-col gap-5">
            <span class="font-bold self-center">Data used ↑ (Mb)</span>
            <div class="flex flex-col">
              <span class="text-xxs	text-text-muted self-end">{{ userDataUpload }}/{{ maxDataUpload }} (~{{ Math.round(userDataUpload / maxDataUpload * 100) }}%)</span>
              <Progress :model-value="Math.round(userDataUpload / maxDataUpload * 100)" class="w-96" bar-Color="#2A9D90"></Progress>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center flex-col p-5 border border-navabar-border rounded-xl shadow-md max-[1140px]:hidden">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ statisticStore.userStatistic.nodesExecuted }}</span>

          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Nodes ran</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>



      <div class="flex items-center justify-center flex-col p-5 border border-navabar-border rounded-xl shadow-md min-w-56 max-[1380px]:hidden">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ serviceStore.getNumberOfConnectedServices() }}</span>

          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Service used</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col p-4 gap-2.5 border border-navabar-border rounded-xl shadow-md">
      <div class="flex gap-2.5 items-center">
        <i class="fa-solid fa-chevron-down"></i>
        <span class="font-bold">Recent workflows</span>
      </div>

      <div class="flex flex-col gap-2.5 p-2.5 w-full h-full">
        <WorkflowCard
          v-if="recentWorkflows.length !== 0"
          v-for="workflow in recentWorkflows"
          :key="workflow.id"
          :workflow-id="workflow.id"
          :workflow-name="workflow.name"
          :workflow-description="workflow.description"
          :services="workflow.serviceUsed"
          :active="workflow.status === 'enabled'"
          :problems="workflow.status === 'error'"
        />
        <div v-else class="flex items-center justify-center w-full h-full">
          <img src="/public/assets/images/dashboard/empty-box.png" alt="empty box" class="h-80 w-80 opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
