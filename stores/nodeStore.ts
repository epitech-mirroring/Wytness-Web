export type UsedLabels = { [nodeId: number]: { [label: string] : boolean } };

export const useNodeStore = defineStore("nodes", () => {
    const usedLabels = ref<UsedLabels>([]);

    function getUsedLabels(nodeId: number) {
        if (!usedLabels.value[nodeId]) {
            usedLabels.value[nodeId] = {};
        }
        return usedLabels.value[nodeId];
    }

    function getUsedLabelsValue(nodeId: number, label: string) {
        if (!usedLabels.value[nodeId]) {
            return false;
        }
        if (!usedLabels.value[nodeId][label]) {
            return false;
        }
        return getUsedLabels(nodeId)[label];
    }

    async function updateNodePosition(workflowId: number, nodeId: number, position: { x: number; y: number }) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes/${nodeId}`, {
            method: "PATCH",
            body: JSON.stringify({ position }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to update node position");
        }

        return await response.json();
    }

    async function removeNodePreviousLink(workflowId: number, nodeId: number) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes/${nodeId}`, {
            method: "PATCH",
            body: JSON.stringify({ previous: null }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to remove node previous link");
        }

        return await response.json();
    }

    async function addNodePreviousLink(workflowId: number, nodeId: number, previousNodeId: number, label: string) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes/${nodeId}`, {
            method: "PATCH",
            body: JSON.stringify({ previous: previousNodeId, label }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to add node previous link");
        }

        return await response.json();
    }

    async function updateNodeConfig(workflowId: number, nodeId: number, config: { key: string; value: string }[]) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes/${nodeId}`, {
            method: "PATCH",
            body: JSON.stringify({ config: {
                ...config.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {}),
                }
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to update node config");
        }

        return await response.json();
    }

    async function createNode(workflowId: number, nodeId: number, position: { x: number; y: number }) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes`, {
            method: "POST",
            body: JSON.stringify({ id: nodeId, position, config: {} }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to create node");
        }

        return await response.json();
    }

    async function deleteNode(workflowId: number, nodeId: number) {
        const backend = useBackend();

        const response = await backend.authFetch(`/workflows/${workflowId}/nodes/${nodeId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete node");
        }

        return;
    }

    function clear() {
        usedLabels.value = {};
    }

    return {
        usedLabels,
        getUsedLabels,
        getUsedLabelsValue,
        updateNodePosition,
        createNode,
        deleteNode,
        removeNodePreviousLink,
        addNodePreviousLink,
        updateNodeConfig,
        clear,
    };
});
