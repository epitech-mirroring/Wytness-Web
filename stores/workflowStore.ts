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
  serviceUsed: string[];
  status: string;

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

  async function fetchWorkflowsWithParams(sortKey: string, sortOrder: string, limit: number) {
    const backend = useBackend();

    const params = new URLSearchParams();
    if (sortKey !== "") {
      params.append("sortKey", sortKey);
    }
    if (sortOrder !== "") {
      params.append("sortOrder", sortOrder);
    }
    if (limit !== -1) {
      params.append("limit", limit.toString());
    }

    const response = await backend.authFetch(`/workflows?${params.toString()}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const orderedWorkflows = await response.json();
    return orderedWorkflows;
  }

  async function fetchRecentWorkflows(limit: number) {
    return await fetchWorkflowsWithParams("statistics.duration.start", "ASC", limit);
  }

  return { workflows, fetchWorkflows, fetchWorkflowsWithParams, fetchRecentWorkflows, getWorkflow };
});
