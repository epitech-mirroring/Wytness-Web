<script setup lang="ts">
  import { useStatisticStore } from '#build/imports'
import { SwitchSquare } from '@/components/ui/switch'
  import { onMounted } from 'vue'
import LogoSquare from './logoSquare.vue'

  interface WorkflowCardProps {
    workflowId: number,
    workflowName: string,
    workflowDescription: string,
    active: boolean
    problems: boolean
    services: string[]
  }

  const props = withDefaults(defineProps<WorkflowCardProps>(), {
    workflowId: 0,
    workflowName: 'Workflow',
    workflowDescription: 'Description',
    active: false,
    problems: false,
    services: []
  });

  const router = useRouter();
  const statisticStore = useStatisticStore();
  const workflowStat = ref(
    {
      executions: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
      dataUsedDownLoad: 0,
      dataUsedUpload: 0,
      nodesExecuted: 0,
    }
  );

  onMounted( async () => {
    workflowStat.value = await statisticStore.getWorkflowStatistic(props.workflowId);
    console.log("active", props.active);
    console.log("problems", props.problems);
  });

  const activateWorkflow = (active : boolean) => {
    console.log("Activate workflow", active);
  };

  const editWorkflow = () => {
    router.push(`/workflows/${props.workflowId}`);
  };
</script>

<template>
  <div
    class="flex p-5 pr-8 self-stretch items-center rounded-lg border border-navbar-border cursor-pointer shadow justify-between hover:shadow-lg"
    @click="editWorkflow"
    >
    <div class="flex gap-2.5 items-center">
      <div class="flex">
        <LogoSquare v-for="(service, i) in props.services.slice(0,3)" :serviceName="service" :pos="i" :max="props.services.length" />
        <LogoSquare v-for="i in 4 - props.services.length" serviceName="" :pos="props.services.length + i" :max="props.services.length" />

        <div
          v-if="props.services.length > 3"
          class="flex h-10 aspect-square bg-workflow-logo-background items-center justify-center rounded-r-sm"
        >
          <span class="text-white font-semibold">+{{ props.services.length - 3 }}</span>
        </div>
      </div>

      <div class="flex flex-col">
        <span class="font-bold">{{props.workflowName}}</span>

        <div class="flex text-xs text-text-muted gap-1.5 items-center content-center">
          <span class="truncate max-w-44">
            {{props.workflowDescription}}
          </span>

          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
            <circle cx="2" cy="2.35999" r="2" fill="#A2A6AC"/>
          </svg>

          <div class="flex gap-2 items-center">
            <div class="flex gap-1 items-center">
              <i class="far fa-download"></i>
              <span>
                {{Math.ceil(workflowStat.dataUsedDownLoad / 1000 / 1000)}} Mo
              </span>
            </div>

            <div class="flex gap-1 items-center">
              <i class="far fa-rotate"></i>
              <span>
                {{workflowStat.executions}}
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-2.5 items-center">
      <SwitchSquare v-model="props.active" :defaultChecked="props.active" class="h-6 w-11" @update:checked="activateWorkflow" />
      <i class="fa-regular fa-triangle-exclamation text-navbar-border" :class="{ 'text-warning': props.problems}"></i>
    </div>
  </div>
</template>

<style>
</style>