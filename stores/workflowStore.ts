import { defineStore } from "pinia";

export type WorkflowNode = {
  id: number;
  nodeId: number;
  config: unknown;

  next: { label: string; next: WorkflowNode[] }[];
  position: { x: number; y: number };
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

  async function fetchWorkflowNodes(workflowId: number) : Promise<WorkflowNode[]> {
    const backend = useBackend();

    const response = await backend.authFetch(`/workflows/${workflowId}/nodes`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workflow nodes");
    }

    return await response.json();
  }

  async function createWorfklow(name: string, description: string) {
    const backend = useBackend();

    const response = await backend.authFetch("/workflows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    if (!response.ok) {
      throw new Error("Failed to create workflow");
    }

    await fetchWorkflows();
    return await response.json();
  }

  function clear() {
    workflows.value = [];
  }

  return {
    workflows,
    fetchWorkflows,
    fetchWorkflowsWithParams,
    fetchRecentWorkflows,
    getWorkflow,
    fetchWorkflowNodes,
    createWorfklow,
    clear,
  };
});
