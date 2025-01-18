<script setup lang="ts">
import { ref, onMounted } from "vue";
import LogoSVG from "./LogoSVG.vue";

interface NodeCardProps {
  nodeId: number,
  nodeName: string,
  serviceName: string,
  serviceColor: string,
  serviceLogo: string,
}

const props = withDefaults(defineProps<NodeCardProps>(), {
  nodeId: 0,
  nodeName: 'Node',
  serviceName: 'Service',
  serviceColor: '#1ED760',
  serviceLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
})
</script>

<template>
  <div
    class="flex items-center px-1 gap-1.5 py-0.5 bg-white rounded border border-black cursor-pointer select-none service-card w-max"
    :style="{ 'border-color': props.serviceColor === '#FFFFFF' ? '#F0EAEE' : props.serviceColor, '--color': props.serviceColor }"
  >
    <div class="h-4 w-4 rounded-full">
      <LogoSVG
        :serviceName="props.serviceName"
        :logoUrl="props.serviceLogo"
        :color="props.serviceColor"
        :width="15"
        :height="15"
      />
    </div>

    <span class="text-xs font-medium">{{ props.nodeName }}</span>
  </div>
</template>

<style scoped lang="scss">
  .service-card {
    --color: #1CD760;
    --shadow-color: rgb(from var(--color) r g b / 0.3);
    box-shadow: 0px 2px 4.2px 0px var(--shadow-color);
  }


</style>

<style>
.tooltip-card {
  background: rgba(105, 98, 255, 0.90);
  backdrop-filter: blur(2px);
}
</style>
