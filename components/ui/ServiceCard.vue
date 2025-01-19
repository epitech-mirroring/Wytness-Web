<script setup lang="ts">
  import { defineProps, onMounted } from 'vue'

  interface ServiceCardProps {
    name: string,
    logo: string,
    connected: boolean,
    bgColor: string,
    serviceId: string
  }

  const props = withDefaults(defineProps<ServiceCardProps>(), {
    name: 'Spotify',
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    connected: false,
    bgColor: "#1CD760",
    serviceId: "spotify"
  })

  const serviceStore = useServiceStore();
  const connectButton = ref(props.connected ? "CONNECTED" : "CONNECT");
  const logoResponse = ref();

  onMounted(async () => {
    const params = new URLSearchParams();
    if (props.bgColor !== "#FFFFFF") {
      params.append('color', "#FFFFFF");
    }
    params.append('width', '32');
    params.append('height', '32');
    logoResponse.value = await (await fetch(props.logo + "?" + params.toString())).text();
  });
</script>

<template>
  <div
    tabindex="0"
    class="flex flex-col p-2.5 gap-4 rounded-md w-72 connection shadow hover:shadow-lg"
    :style="{ '--color': props.bgColor }" :class="bgColor === '#FFFFFF' ? 'border border-navbar-border' : ''"
    @mouseover="connectButton = props.connected ? 'DISCONNECT' : 'CONNECT'"
    @mouseleave="connectButton = props.connected ? 'CONNECTED' : 'CONNECT'"
  >
    <div class="flex gap-1 text-2xl font-semibold tracking-tight items-center self-start" :class="bgColor === '#FFFFFF' ? 'text-black' : 'text-white'">
      <div id="logo" v-html="logoResponse" class="h-8 w-8 logo-div" :alt="props.name + ' logo'">

      </div>

      <span>
        {{ props.name.charAt(0).toUpperCase() + props.name.slice(1) }}
      </span>
    </div>

    <div
      tabindex="0"
      class="flex gap-1.5 items-center self-end px-2.5 rounded border cursor-pointer font-medium hover:shadow"
      :class="props.connected ? 'connected' : 'connect'"
      :style="{ '--color': props.bgColor === '#FFFFFF' ? '#00000' : props.bgColor }"
      @click="props.connected ? serviceStore.disconnectService(props.serviceId) : serviceStore.connectService(props.serviceId)"
      @keydown.enter="props.connected ? serviceStore.disconnectService(props.serviceId) : serviceStore.connectService(props.serviceId)"
      @keydown.space="props.connected ? serviceStore.disconnectService(props.serviceId) : serviceStore.connectService(props.serviceId)"
    >
      <span>
        {{ connectButton }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .connection {
    --color: #1CD760;
    background-color: var(--color);

    .connected {
      --light-color: color-mix(in srgb, var(--color) 50%, white 50%);
      border-color: var(--light-color);
      color: var(--light-color);
    }

    .connect {
      border: 0;
      background-color: white;
      color: black;
    }
  }

  .connection:hover {
    .connected {
      border-color: transparent;
      background-color: white;
      @apply text-warning
    }
  }
</style>
