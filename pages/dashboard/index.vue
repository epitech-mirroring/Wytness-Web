<script setup lang="ts">
import { AvatarImage } from "radix-vue";

definePageMeta({
  title: "Dashboard",
  description: "Dashboard",
  middleware: ["auth"],
});

const workflowStore = useWorkflowStore();
const router = useRouter();

onMounted(() => {
  workflowStore.fetchWorkflows();
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-2">
    <div
      v-for="workflow in workflowStore.workflows"
      :key="workflow.id"
      class="workflow"
    >
      <div class="h-full w-fit aspect-square flex items-center justify-center">
        <Avatar size="base" shape="square">
          <AvatarImage
            :src="`https://avatar.vercel.sh/${workflow.id}.png`"
            :alt="workflow.name"
          />
        </Avatar>
      </div>
      <div class="w-fit h-full flex flex-col items-start justify-center gap-2">
        <span class="font-semibold whitespace-nowrap">{{ workflow.name }}</span>
        <span class="text-sm text-gray-500">{{ workflow.description }}</span>
      </div>
      <div class="w-full h-full flex flex-col items-end justify-center gap-2">
        <Button
          size="icon"
          variant="outline"
          @click="router.push('/workflows/' + workflow.id)"
        >
          <i class="fas fa-pen" />
        </Button>
        <Button size="icon" variant="outline">
          <i class="fas fa-trash" />
        </Button>
      </div>
    </div>
    <Button size="icon" variant="default" class="m-5">
      <i class="fas fa-plus" />
    </Button>
  </div>
</template>

<style scoped>
.workflow {
  @apply h-36 w-full;
  @apply p-6 rounded-xl shadow-lg bg-white flex flex-row items-center text-center;
  @apply border-2 border-gray-200;
}
</style>
