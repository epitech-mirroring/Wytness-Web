<script setup lang="ts">
  import { useStatisticStore } from '#build/imports'
  import { SwitchSquare } from '@/components/ui/switch'
  import { onMounted } from 'vue'
  import { useToast } from '@/components/ui/toast'
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
    problems: false
  });

  const router = useRouter();
  const { toast } = useToast();
  const statisticStore = useStatisticStore();
  const workflowStore = useWorkflowStore();
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
  });

  watch(() => props.workflowId, async () => {
    workflowStat.value = await statisticStore.getWorkflowStatistic(props.workflowId);
  });

  const activateWorkflow = async (active : boolean) => {
    await workflowStore.updateWorkflowState(props.workflowId, active);
    toast({
      title: 'Workflow updated',
      description: `Workflow ${props.workflowName} is now ${active ? 'active' : 'inactive'}`,
    });
  };

  const editWorkflow = () => {
    router.push(`/workflows/${props.workflowId}`);
  };
</script>

<template>
  <div
    tabindex="0"
    class="flex p-5 pr-8 max-[830px]:p-3 self-stretch items-center rounded-lg border border-navbar-border cursor-pointer shadow justify-between hover:shadow-lg"
    @click="editWorkflow"
    @keydown.enter="editWorkflow"
    >
    <div class="flex gap-2.5 items-center">
      <div class="flex max-[820px]:hidden" >
        <LogoSquare v-for="(service, i) in props.services.slice(0,3)" :serviceName="service" :pos="i" :max="props.services.length" />
        <LogoSquare v-for="i in Math.max(4 - props.services.length, 0)" serviceName="" :pos="props.services.length + i" :max="props.services.length" />

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

          <svg class="max-[920px]:hidden" xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
            <circle cx="2" cy="2.35999" r="2" fill="#A2A6AC"/>
          </svg>

          <div class="flex gap-2 items-center max-[920px]:hidden">
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
      <SwitchSquare
        v-model="props.active"
        :defaultChecked="props.active"
        class="h-6 w-11"
        @update:checked="activateWorkflow"
        @keydown.space="activateWorkflow"
        aria-label="Workflow Activation"/>
      <i class="fa-regular fa-triangle-exclamation text-navbar-border" :class="{ 'text-warning': props.problems}"></i>
    </div>
  </div>
</template>

<style>
</style>