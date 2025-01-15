import { defineStore } from "pinia";

export type UserStatistic = {
    workflows: number;
    executions: number;
    successfulExecutions: number;
    failedExecutions: number;
    dataUsedDownLoad: number;
    dataUsedUpload: number;
    nodesExecuted: number;
};

export type WorkflowStatistic = {
    executions: number;
    successfulExecutions: number;
    failedExecutions: number;
    dataUsedDownLoad: number;
    dataUsedUpload: number;
    nodesExecuted: number;
};

export const useStatisticStore = defineStore("statistic", () => {
  const userStatistic = ref<UserStatistic>({
    workflows: -1,
    executions: -1,
    successfulExecutions: -1,
    failedExecutions: -1,
    dataUsedDownLoad: -1,
    dataUsedUpload: -1,
    nodesExecuted: -1,
    });

    const workflowsStatistic = ref<[number, WorkflowStatistic][]>([]);

    async function fetchUserStatistic() {
        const backend = useBackend();

        const response = await backend.authFetch("/statistics/users/me", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user statistic");
        }

        userStatistic.value = await response.json();
    }

    async function fetchWorkflowStatistic(workflowId: number) {
        const backend = useBackend();

        const response = await backend.authFetch(`/statistics/workflows/${workflowId}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch workflow statistic");
        }

        workflowsStatistic.value.push([workflowId, await response.json()]);
    }

    async function getWorkflowStatistic(workflowId: number) {
        const workflow = workflowsStatistic.value.find(([id]) => id === workflowId);

        if (workflow) {
            return workflow[1];
        }

        await fetchWorkflowStatistic(workflowId);

        const workflowStat = workflowsStatistic.value.find(([id]) => id === workflowId);
        if (!workflowStat) {
            throw new Error("Failed to fetch workflow statistic");
        }
        return workflowStat[1];
    }

    async function getUserDownloadedDatainMo() {
        if (userStatistic.value.dataUsedDownLoad === -1) {
            fetchUserStatistic();
        }
        return Math.ceil(userStatistic.value.dataUsedDownLoad / 1000 / 1000);
    }

    async function getUserUploadedDatainMo() {
        if (userStatistic.value.dataUsedUpload === -1) {
            fetchUserStatistic();
        }
        return Math.ceil(userStatistic.value.dataUsedUpload / 1000 / 1000);
    }

  return {
    userStatistic,
    workflowsStatistic,
    fetchUserStatistic,
    fetchWorkflowStatistic,
    getWorkflowStatistic,
    getUserDownloadedDatainMo,
    getUserUploadedDatainMo,
  };
});
