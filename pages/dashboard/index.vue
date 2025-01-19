<script setup lang="ts">
  import Progress from '@/components/ui/progress/Progress.vue';
  import { ref, onMounted } from 'vue';
  import WorkflowCard from '~/components/ui/WorkflowCard.vue';

  definePageMeta({
    title: "Dashboard",
    description: "Dashboard page",
    middleware: ["auth"],
    layout: "dashboard",
  });

  useHead({
    title: "Dashboard"
  });

  const workflowStore = useWorkflowStore();
  const serviceStore = useServiceStore();
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
  };

  const toogleWorflowDiv = () => {
    const workflow = document.getElementById('workflowsContentDiv');
    const chevron = document.getElementById('chevron');
    workflow?.classList.toggle('hidden');
    chevron?.classList.toggle('fa-chevron-down');
    chevron?.classList.toggle('fa-chevron-right');
  }
</script>

<template>
  <div class="w-full h-fit flex flex-col items-start justify-start px-5 py-3 gap-5">
    <div class="flex flex-wrap w-full justify-between max-[1231px]:justify-between gap-1.5">
      <div class="flex items-center max-[680px]:w-full justify-center flex-col p-2 min-[1369px]:p-5 max-[1231px]:p-5 max-lg:p-2 border border-navabar-border rounded-xl shadow-md">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ statisticStore.userStatistic.successfulExecutions }}</span>
          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Succesful run</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-1.5 max-[1231px]:order-last max-[1231px]:w-full max-[1231px]:mt-2">
        <div class="flex items-center justify-center flex-col p-4 border border-navabar-border rounded-xl shadow-md w-full">
          <div class="flex flex-col gap-5 w-full">
            <span class="font-bold self-center">Data used ↓ (Mb)</span>
            <div class="flex flex-col w-full">
              <span class="text-xxs	text-text-muted self-end mb-1">{{ userDataDownload }}/{{ maxDataDownload }} (~{{ Math.round(userDataDownload / maxDataDownload * 100) }}%)</span>
              <Progress :model-value="Math.round(userDataDownload / maxDataDownload * 100)" class="min-[1369px]:w-96 max-[1231px]:w-full w-80" bar-Color="#E76E50"></Progress>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center flex-col p-4 border border-navabar-border rounded-xl shadow-md max-[1231px]:mt-2">
          <div class="flex flex-col gap-5 w-full">
            <span class="font-bold self-center">Data used ↑ (Mb)</span>
            <div class="flex flex-col w-full">
              <span class="text-xxs	text-text-muted self-end mb-1">{{ userDataUpload }}/{{ maxDataUpload }} (~{{ Math.round(userDataUpload / maxDataUpload * 100) }}%)</span>
              <Progress :model-value="Math.round(userDataUpload / maxDataUpload * 100)" class="min-[1369px]:w-96 w-80 max-[1231px]:w-full" bar-Color="#2A9D90"></Progress>
            </div>
          </div>
        </div>
      </div>

      <div class="max-[865px]:hidden flex items-center justify-center flex-col p-5 max-lg:p-2 border border-navabar-border rounded-xl shadow-md max-[1231px]:px-9">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ statisticStore.userStatistic.nodesExecuted }}</span>

          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Nodes ran</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>



      <div class="flex items-center max-[680px]:w-full justify-center flex-col p-2 min-[1369px]:p-5 max-[1231px]:p-5 max-lg:p-2 border border-navabar-border rounded-xl shadow-md">
        <div class="flex flex-col items-center gap-5 p-5">
          <span class=" text-dashboard-kpi text-8xl">{{ serviceStore.getNumberOfConnectedServices() }}</span>

          <div class="flex flex-col items-center">
            <span class="text-xl text-black">Service used</span>
            <span class="text-xs text-text-muted">(this year)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full h-full flex-col p-4 gap-2.5 border border-navabar-border rounded-xl shadow-md">
      <div>
        <button @click="toogleWorflowDiv" class="flex gap-2.5 items-center" tabindex="0">
          <i id="chevron" class="fa-solid fa-chevron-down"></i>
          <span class="font-bold">Recent workflows</span>
        </button>
      </div>

      <div id="workflowsContentDiv" class="flex flex-col gap-2.5 p-2.5 w-full h-full">
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
