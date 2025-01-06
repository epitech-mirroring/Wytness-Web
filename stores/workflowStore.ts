import { defineStore } from "pinia";

export type WorkflowNode = {
  id: number;
  nodeID: number;
  config: unknown;

  next: WorkflowNode[];
};

export type Workflow = {
  id: number;
  name: string;
  description: string;
  owner: number;

  entrypoints: WorkflowNode[];
  nodes: WorkflowNode[];
};

export const useWorkflowStore = defineStore("workflows", () => {
  const workflows = ref<Workflow[]>([]);

  async function fetchWorkflows() {
    const backend = useBackend();

    const response = await backend.authFetch("/workflows", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    workflows.value = await response.json();
  }

  const getWorkflow = computed(() => (workflowId: number) => {
    return workflows.value.find((workflow) => workflow.id === workflowId);
  });

  return { workflows, fetchWorkflows, getWorkflow };
});
