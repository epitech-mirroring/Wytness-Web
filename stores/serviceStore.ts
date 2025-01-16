import { defineStore } from "pinia";

export type ServiceMetadata = {
  useOAuth: boolean;
};

export type ListService = {
  name: string;
  description: string;
  logo: string;
  color: string;
  nodes: ListNode[];
} & ServiceMetadata;

export enum NodeType {
  TRIGGER = "trigger",
  ACTION = "action",
}

export type ListNode = {
  id: number;
  name: string;
  description: string;
  type: NodeType;
  labels: string[];
};

export type Connection = {
  serviceId: string;
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

  async function fetchServicesNodes() {
    const backend = useBackend();

    for (const service of services.value) {
      const response = await backend.authFetch(`/services/${service.name}/nodes`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch services nodes");
      }

      service.nodes = await response.json();
    }
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

  function getServiceWithId(id: string) {
    const service = services.value.find((service) => service.name === id);
    if (!service) {
      throw new Error("Service not found");
    }
    return service;
  }

  async function connectService(serviceId: string) {
    const connection = connections.value.find(
      (connection) => connection.serviceId === serviceId,
    );

    if (!connection || connection.connected) {
      return;
    }

    navigateTo(connection.url, { external: true });
  }

  async function disconnectService(serviceId: string) {
    const backend = useBackend();

    const response = await backend.authFetch(
      `/services/${serviceId}/disconnect`,
      {
        method: "POST",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to disconnect service");
    }

    await fetchConnections();
  }

  async function postConnection(
    serviceName: string,
    code: string,
    state: string,
  ) {
    const backend = useBackend();
    const response = await backend.authFetch(
      `/services/${serviceName}/connect`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, state }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to connect service");
    }

    await fetchConnections();
  }

  function getNodeName(nodeId: number) {
    const node = services.value
      .flatMap((service) => service.nodes)
      .find((node) => node.id === nodeId);
    return node?.name;
  }

  function getNumberOfConnectedServices() {
    return connections.value.filter((connection) => connection.connected)
      .length;
  }

  function clear() {
    services.value = [];
    connections.value = [];
  }

  return {
    services,
    fetchServices,
    fetchServicesNodes,
    connections,
    fetchConnections,
    getServiceWithId,
    connectService,
    disconnectService,
    postConnection,
    getNodeName,
    getNumberOfConnectedServices,
    clear,
  };
});
