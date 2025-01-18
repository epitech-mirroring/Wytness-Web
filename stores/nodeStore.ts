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

    function clear() {
        usedLabels.value = {};
    }

    return {
        usedLabels,
        getUsedLabels,
        getUsedLabelsValue,
        updateNodePosition,
        clear,
    };
});
