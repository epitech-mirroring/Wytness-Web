<script setup lang="ts">
interface LogoSquareProps {
  serviceName: string;
  pos: number;
  max: number;
}

const props = withDefaults(defineProps<LogoSquareProps>(), {
  serviceName: "",
  pos: 0,
  max: 0,
});

  const serviceStore = useServiceStore();
  const service = ref();
  const logoResponse = ref();

  onMounted(async () => {
    if (props.serviceName === '') {
      return;
    }
    const params = new URLSearchParams();
    if (serviceStore.getServiceWithId(props.serviceName).color !== "#FFFFFF") {
      params.append('color', "#FFFFFF");
    }
    params.append('width', '24');
    params.append('height', '24');
    logoResponse.value = await (await fetch(serviceStore.getServiceWithId(props.serviceName).logo + "?" + params.toString())).text();
  });

</script>

<template>
  <div
    v-if="props.serviceName !== ''"
    class="flex h-10 aspect-square items-center justify-center"
    :style="{ backgroundColor: serviceStore.getServiceWithId(props.serviceName).color === '#FFFFFF' ? '#F0EAEE' : serviceStore.getServiceWithId(props.serviceName).color }"
    :class="(props.pos === 0 ? 'rounded-l-sm ' : ' ') + (props.pos === props.max - 1 ? 'rounded-r-sm ' : ' ')"
  >
    <div v-html="logoResponse" class="w-full h-full flex justify-center items-center" :alt="serviceStore.getServiceWithId(props.serviceName).name + ' logo'"></div>
  </div>

  <div v-else class="flex h-10 aspect-square items-center justify-center bg-white">
  </div>
</template>
