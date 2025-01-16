<script setup lang="ts">
  import { ref } from 'vue';
  import WorkflowCard from '~/components/ui/WorkflowCard.vue';
  import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  } from '@/components/ui/pagination'

  definePageMeta({
    title: "Workflows",
    description: "Workflows page",
    middleware: ["auth"],
    layout: "dashboard",
  });

  const workflowStore = useWorkflowStore();

  const workflows = ref([]);

  const pageIndex = ref(1);

  onMounted(() => {
    workflowStore.fetchWorkflows();
  });


</script>

<template>
  <div class="w-full h-full flex flex-col items-start p-5 gap-4 justify-between">
    <div class="flex flex-col w-full h-full items-start justify-start gap-4">
    <WorkflowCard
      v-for="(workflow, index) in workflowStore.workflows.slice(pageIndex * 7 - 7, pageIndex * 7 )"
      :key="index"
      :workflow-id="workflow.id"
      :workflow-name="workflow.name"
      :workflow-description="workflow.description"
      :services="workflow.serviceUsed"
      :active="workflow.status === 'enabled'"
      :problems="workflow.status === 'error'"
      />
    </div>

    <div class="flex justify-center self-center pb-20">
      <Pagination v-slot="{ page }" :total="workflows.length" :sibling-count="1" show-edges :default-page="1" :itemsPerPage="7">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst class="hover:bg-navbar-hover-background" @click="pageIndex=1" />
          <PaginationPrev class="hover:bg-navbar-hover-background" @click="pageIndex-=1"/>

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :class="item.value === page ? '': 'hover:bg-navbar-hover-background'" :variant="item.value === page ? 'default' : 'outline'" @click="pageIndex=item.value">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext class="hover:bg-navbar-hover-background" @click="pageIndex+=1" />
          <PaginationLast class="hover:bg-navbar-hover-background" @click="pageIndex=Math.ceil(workflows.length/7)"/>
        </PaginationList>
      </Pagination>
    </div>
    <div class="flex absolute rounded-full bg-primary hover:bg-primary/90 text-white bottom-6 right-6 h-16 aspect-square items-center justify-center cursor-pointer">
      <span class="text-5xl">+</span>
    </div>

  </div>
</template>

<style scoped>
</style>
