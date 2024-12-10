import { defineStore } from "pinia";

export type ServiceMetadata = {
  useOAuth: boolean;
};

export type ListService = {
  id: number;
  name: string;
  description: string;
  nodes: ListNode[];
} & ServiceMetadata;

export enum NodeType {
  TRIGGER = "trigger",
  ACTION = "action",
}

export type ListNode = {
  id: number;
  name: string;
  type: NodeType;
};

export type Connection = {
  serviceId: number;
  connected: boolean;
  url: string;
};

export const useServiceStore = defineStore("services", () => {
  const services = ref<ListService[]>([]);
  const connections = ref<Connection[]>([]);

  async function fetchServices() {
    const backend = useBackend();

    const response = await backend.authFetch("/services", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    services.value = await response.json();
  }

  async function fetchConnections() {
    const backend = useBackend();

    const response = await backend.authFetch("/services/connected", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch connections");
    }

    connections.value = await response.json();
  }

  function getServiceWithId(id: number) {
    return services.value.find((service) => service.id === id);
  }

  async function connectService(serviceId: number) {
    const connection = connections.value.find(
      (connection) => connection.serviceId === serviceId,
    );

    if (!connection || connection.connected) {
      return;
    }

    navigateTo(connection.url, { external: true });
  }

  async function postConnection(serviceName: string, code: string) {
    const backend = useBackend();
    const response = await backend.authFetch(
      `/services/${serviceName}/connect`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to connect service");
    }

    await fetchConnections();
  }

  return {
    services,
    fetchServices,
    connections,
    fetchConnections,
    getServiceWithId,
    connectService,
    postConnection,
  };
});
